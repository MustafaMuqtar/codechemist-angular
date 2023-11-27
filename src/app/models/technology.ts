export interface ITechnology {
  id: number
  title: string
  image: string
  technologyLessons: [
    {
      id: number
      title: string
      lessonSubject: [
        {
          id: number
          title: string
          content: string
          subjectsExercises: {
            id: number
            title: string
            PDF: string
          }
        }

      ]
    }
  ]
}


export interface ITechnologyDetails {
  [id: number]: ITechnology; //Or string instead of number
}