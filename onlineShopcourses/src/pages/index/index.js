import { getPage } from "../../shared/lib" 
import { Button } from "../../shared/ui/button/button"  
import { Input } from "../../shared/ui/input/input"

export default() => {
    return getPage({
        title: "ГЛАВНАЯ СТРАНИЦА, МУЖИКИ",
        body: `
            <h1>ЭТО ГЛАВНАЯ</h1>

            ${Button({
                label: "ЭТО КНОПКА",
                extraAttrs: {
                    "data-js-require": true,
                    "id": "btn"
                },
                extraClasses: {
                    isHidden: false,
                    isDisabled: false,
                }
            })}

            ${Input({
                label: "ЭТО ТЕКСТОВОЕ ПОЛЕ, МУЖИКИ",
                extraAttrs: {
                    "data-js-require": true,
                    "id": "btn"
                },
                extraClasses: {
                    isHidden: false,
                    isDisabled: false,
                }
            })}

            <nav>
                <ul>
                    <li>
                        <a href="/">ПЕРЕЙТИ НА ГЛАВНУЮ</a>
                    </li>
                    <li>
                        <a href="/about.html">О НАС</a>
                    </li>
                </ul>
            </nav>
        `
        
    })
}
