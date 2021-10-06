import { Storage } from "./types";
import constants from "./utils/constants";
import localStore from "./services/localStorage";

const { TIME_KEY, COUNTRY_KEY } = constants;
const { get } = localStore;

const list = get(COUNTRY_KEY);

const dataFromStorage: Storage = {
  time: Number(get(TIME_KEY)),
  countryList: list ? JSON.parse(list) : undefined
};

export default dataFromStorage;
