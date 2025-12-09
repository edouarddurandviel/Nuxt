type About = {
  title: string
  intro: string
  article: string
}

export async function getAbout(key: string): Promise<About | null> {
  if(key === 'about') {

    return {
    title: "my title",
    intro: "my intro",
    article: "my article about page content"
  }

  }else{
    return null
  }
  
}
