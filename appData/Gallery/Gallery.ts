import content from '*.png'

import developer_1 from '../../images/Gallery/developer_1.png'
import developer_2 from '../../images/Gallery/developer_2.png'
import developer_3 from '../../images/Gallery/developer_3.png'

interface IGallery {
    title: string,
    description: string[],
    images: typeof content[]
}

export const GalleryData: IGallery = {
    title: 'Gallery',
    description: ['By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.', 'If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.'],
    images: [developer_1, developer_2, developer_3]
}