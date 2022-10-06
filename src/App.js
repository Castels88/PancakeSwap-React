import { Cake } from "./React-Modules/Cake/Cake";
import { LangaugePicker } from "./React-Modules/Language/LanguagePicker";
import { WinMillions } from "./React-Modules/WinMillions/WinMillions";

function App() {
  return (
    <div>
      <WinMillions />
      <Cake />
      <LangaugePicker/>
    </div>
  );
}

export default App;
