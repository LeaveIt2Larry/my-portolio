'use server'

import { Octokit } from 'octokit'

export type Sideproject = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
  repo?: string
  stars?: number
}

export async function getProjects() {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'use-scrollspy',
      area: 'React Hook',
      image: 'https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png',
      imageAlt: 'scrollspy hook by Larry Ly',
      repo: 'larbeartow/use-scrollspy',
      url: 'https://github.com/larbeartow/louvair',
      color: '#4D4E52',
    },
    {
      id: 1,
      name: 'Poimandres.nvim',
      area: 'Neovim Plugin',
      image:
        'https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png',
      imageAlt: 'Poimandres Neovim color scheme by Larry Ly',
      repo: 'larbeartow/poimandres.nvim',
      url: 'https://github.com/larbeartow/adminhippo',
      color: '#23393D',
    },
    {
      id: 3,
      name: 'Modern Monokai',
      area: 'VSCode Color Scheme',
      image: 'https://github.com/larbeartow/modern-monokai/raw/master/assets/screen1.png',
      imageAlt: 'Modern Monokai color scheme by Larry Ly',
      repo: 'larbeartow/modern-monokai',
      url: 'https://marketplace.visualstudio.com/items?itemName=larbeartow.modern-monokai',
      color: '#292E36',
    },
  ]

  const projects = await Promise.allSettled(
    sideProjects.map(async project => {
      if (project.repo) {
        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        })

        const {
          data: { stargazers_count: stars },
        } = await octokit.request('GET /repos/{owner}/{repo}', {
          owner: project.repo.split('/')[0],
          repo: project.repo.split('/')[1],
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })

        return {
          ...project,
          stars,
        }
      } else {
        return project
      }
    })
  )
  const successfulProjects = projects.filter(
    project => project.status === 'fulfilled'
  ) as PromiseFulfilledResult<Sideproject>[]

  return successfulProjects.map(project => project.value)
}
