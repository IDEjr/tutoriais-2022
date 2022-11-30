import Box from "./components/box";
import ExibirData from "./components/exibirData";

export default function App() {
  return (
    <Box vertical>
      <ExibirData nome='Gustavo' idade='20'/>
      <Box>
        <ExibirData nome='Gustavo' idade='20'/>
      </Box>
    </Box>
    
  );
}
