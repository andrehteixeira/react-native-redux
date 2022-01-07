import { createStore } from "redux";

export interface iInicialState {
  moedas: number;
  poupanca: number;
  verSaldo: boolean;
}

const initialState: iInicialState = {
  moedas: 0,
  poupanca: 0,
  verSaldo: true,
};

const counterReducer = (state = initialState, action: any) => {
  if (action.type === "incrementMoedas") {
    return {
      moedas: state.moedas + 1,
      poupanca: state.poupanca,
      verSaldo: state.verSaldo,
    };
  }
  if (action.type === "decrementMoedas") {
    return {
      moedas: state.moedas - 1,
      poupanca: state.poupanca,
      verSaldo: state.verSaldo,
    };
  }
  if (action.type === "incrementPoupanca") {
    return {
      moedas: state.moedas,
      poupanca: state.poupanca + 1,
      verSaldo: state.verSaldo,
    };
  }
  if (action.type === "decrementPoupanca") {
    return {
      moedas: state.moedas,
      poupanca: state.poupanca - 1,
      verSaldo: state.verSaldo,
    };
  }
  if (action.type === "toggleSaldo") {
    return {
      moedas: state.moedas,
      poupanca: state.poupanca,
      verSaldo: !state.verSaldo,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
