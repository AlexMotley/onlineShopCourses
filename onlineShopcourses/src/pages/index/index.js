import { getPage } from "../../shared/lib" 

export default() => {
    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>
            
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
        `
    })
}

// export const getPage = ({ body = ``, title = ``, meta = [] }) => {
//     return `
//       <!DOCTYPE html>
//       <html lang="ru">
//         <head>
//           <meta charset="UTF-8" />
//           <link rel="icon" href="/favicon.ico" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           ${meta.map(item => item())}
//           <title>${title}</title>
//           <script src="/src/app/App.js" defer type="module"></script>
//         </head>
//         <body>
//           ${body}
//         </body>
//       </html>
//     `
// }
