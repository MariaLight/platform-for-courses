export const transformCourse = (dbCourse) => ({

    id: dbCourse.id,
    title: dbCourse.title,
    imageUrl: dbCourse.image_url,
    publishedAt: dbCourse.published_at,

})