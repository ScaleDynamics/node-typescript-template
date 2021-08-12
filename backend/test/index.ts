import '@warpjs/engine';
import Backend from 'backend';

const backend = new Backend({
  env: 'emulator',
});

backend.hello().then((msg: string) => {
  console.log(msg);
});
