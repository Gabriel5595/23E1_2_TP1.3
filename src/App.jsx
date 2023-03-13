import './App.css'

export default function App() {

    const link = "http://towardsdatascience.com/ ";
    const text = "Leia o conteúdo de Target DataScience!";
    const a = <a href={link} target="_blank">{text}</a>;

    const mainContainer = <main>
        {a}
    </main>;

    return mainContainer;

}
