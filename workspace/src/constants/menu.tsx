import { BookFilled, BulbFilled, HomeFilled, NotificationFilled, ProjectFilled } from "@ant-design/icons"
import News from "../screens/news"
import Project from "../screens/project"

export const MENU = [
    {key: 'project', title: 'Dự án', icon: <ProjectFilled /> , component: Project},
    {key: 'news', title: 'Thông báo', icon: <NotificationFilled />, component: News},
    {key: 'wiki', title: 'Wiki', icon: <BookFilled />, component: null},
    {key: 'issue', title: 'Vấn đề', icon: <BookFilled />, component: null}
]