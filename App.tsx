import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* =============================
   Telas principais
============================= */
import HomeScreen from './screens/HomeScreen';
import SecondPage from './screens/SecondPage';

/* =============================
   Peito
============================= */
import Peito from './screens/Peito';
import SupinoReto from './screens/SupinoReto';
import SupinoInclinado from './screens/SupinoInclinado';
import SupinoDeclinado from './screens/SupinoDeclinado';
import Crucifixo from './screens/Crucifixo';
import Crossover from './screens/Crossover';

/* =============================
   Costas
============================= */
import Costas from './screens/Costas';
import BarraFixa from './screens/BarraFixa';
import RemadaBaixa from './screens/RemadaBaixa';
import Pulldown from './screens/Pulldown';
import RemadaCurvada from './screens/RemadaCurvada';
import LevantamentoTerra from './screens/LevantamentoTerra';

/* =============================
   Bíceps
============================= */
import Biceps from './screens/Biceps';
import Roscadireta from './screens/Roscadireta';
import RoscaMartelo from './screens/RoscaMartelo';
import RoscaAlternada from './screens/RoscaAlternada';
import RoscaScott from './screens/RoscaScott';
import RoscaConcentrada from './screens/RoscaConcentrada';

/* =============================
   Tríceps
============================= */
import Triceps from './screens/Triceps';
import TricepsPulley from './screens/TricepsPulley';
import TricepsTesta from './screens/TricepsTesta';
import TricepsBanco from './screens/TricepsBanco';
import TricepsCoice from './screens/TricepsCoice';
import TricepsFrances from './screens/TricepsFrances';

/* =============================
   Pernas / Ombro
============================= */
import Pernas from './screens/Pernas';
import Ombro from './screens/Ombro';

// OMBRO — exercícios
import ElevacaoLateral from './screens/ElevacaoLateral';
import Desenvolvimento from './screens/Desenvolvimento';
import ElevacaoFrontal from './screens/ElevacaoFrontal';
import RemadaAlta from './screens/RemadaAlta';
import CrucifixoInverso from './screens/CrucifixoInverso';


/* =====================================
   Tipagem de navegação
===================================== */
export type RootStackParamList = {

  HomeScreen: undefined;
  SecondPage: undefined;

  // Peito
  Peito: undefined;
  SupinoReto: undefined;
  SupinoInclinado: undefined;
  SupinoDeclinado: undefined;
  Crucifixo: undefined;
  Crossover: undefined;

  // Costas
  Costas: undefined;
  BarraFixa: undefined;
  RemadaBaixa: undefined;
  Pulldown: undefined;
  LevantamentoTerra: undefined;
  RemadaCurvada: undefined;

  // Bíceps
  Biceps: undefined;
  Roscadireta: undefined;
  RoscaMartelo: undefined;
  RoscaAlternada: undefined;
  RoscaScott: undefined;
  RoscaConcentrada: undefined;

  // Tríceps
  Triceps: undefined;
  TricepsPulley: undefined;
  TricepsTesta: undefined;
  TricepsBanco: undefined;
  TricepsCoice: undefined;
  TricepsFrances: undefined;

  // Pernas / Ombro
  Pernas: undefined;
  Ombro: undefined;

  // Ombro exercícios
  ElevacaoLateral: undefined;
  Desenvolvimento: undefined;
  ElevacaoFrontal: undefined;
  RemadaAlta: undefined;
  CrucifixoInverso: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/* =====================================
   App
===================================== */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* Telas principais */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondPage" component={SecondPage} />

        {/* Peito */}
        <Stack.Screen name="Peito" component={Peito} />
        <Stack.Screen name="SupinoReto" component={SupinoReto} />
        <Stack.Screen name="SupinoInclinado" component={SupinoInclinado} />
        <Stack.Screen name="SupinoDeclinado" component={SupinoDeclinado} />
        <Stack.Screen name="Crucifixo" component={Crucifixo} />
        <Stack.Screen name="Crossover" component={Crossover} />

        {/* Costas */}
        <Stack.Screen name="Costas" component={Costas} />
        <Stack.Screen name="BarraFixa" component={BarraFixa} />
        <Stack.Screen name="RemadaBaixa" component={RemadaBaixa} />
        <Stack.Screen name="Pulldown" component={Pulldown} />
        <Stack.Screen name="RemadaCurvada" component={RemadaCurvada} />
        <Stack.Screen name="LevantamentoTerra" component={LevantamentoTerra} />

        {/* Bíceps */}
        <Stack.Screen name="Biceps" component={Biceps} />
        <Stack.Screen name="Roscadireta" component={Roscadireta} />
        <Stack.Screen name="RoscaMartelo" component={RoscaMartelo} />
        <Stack.Screen name="RoscaAlternada" component={RoscaAlternada} />
        <Stack.Screen name="RoscaScott" component={RoscaScott} />
        <Stack.Screen name="RoscaConcentrada" component={RoscaConcentrada} />

        {/* Tríceps */}
        <Stack.Screen name="Triceps" component={Triceps} />
        <Stack.Screen name="TricepsPulley" component={TricepsPulley} />
        <Stack.Screen name="TricepsTesta" component={TricepsTesta} />
        <Stack.Screen name="TricepsBanco" component={TricepsBanco} />
        <Stack.Screen name="TricepsCoice" component={TricepsCoice} />
        <Stack.Screen name="TricepsFrances" component={TricepsFrances} />

        {/* Pernas e Tela do Ombro */}
        <Stack.Screen name="Pernas" component={Pernas} />
        <Stack.Screen name="Ombro" component={Ombro} />

        {/* Ombro — exercícios */}
        <Stack.Screen name="ElevacaoLateral" component={ElevacaoLateral} />
        <Stack.Screen name="Desenvolvimento" component={Desenvolvimento} />
        <Stack.Screen name="ElevacaoFrontal" component={ElevacaoFrontal} />
        <Stack.Screen name="RemadaAlta" component={RemadaAlta} />
        <Stack.Screen name="CrucifixoInverso" component={CrucifixoInverso} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
