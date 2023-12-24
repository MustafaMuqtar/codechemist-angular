export interface ICourse {
  id: number
  title: string
  image: string
  description:string
  technologyLessons: [
    {
      id: number
      title: string
      courseLessonVMs: [
        {
          id: number
          title: string
          lessonVideo: string
          subjectsExercises: {
            id: number
            title: string
            pdf: string
          }
        }

      ]
    }
  ]
}


export interface ITechnologyDetails {
  [id: number]: ICourse; //Or string instead of number
}