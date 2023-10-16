import { getPage } from "../../shared/lib/index.js";

export default () => {
    return getPage({
        title: "О нас",
        body: `
            <h1>О нас</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                </ul>
                Мы - самая передовая передовая
            </nav>
        `
    })
}