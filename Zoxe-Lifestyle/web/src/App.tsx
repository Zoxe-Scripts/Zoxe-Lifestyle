import React, { useEffect, useState } from 'react';

import { fetchNui } from './functions/fetchNui';
import { useNuiEvent } from './functions/useNuiEvent';
import { debugData } from './functions/debugData';
import { isEnvBrowser } from './functions/misc';

import Select from './components/Select';

debugData([
  {
    action: 'ShowUi',
    data: true,
  },
], 100);

if (isEnvBrowser()) {
  const root = document.getElementById("root");

  // https://i.imgur.com/iPTAdYV.png - Night time img
  // https://i.imgur.com/3pzRj9n.png - Day time img
  root!.style.backgroundImage = 'url("https://media.discordapp.net/attachments/959500487382695936/1304526495850565662/Img.png?ex=672fb679&is=672e64f9&hm=1b70655ca4fafd97253325a647c3797de1caac61eef6f6465e004186d2bcd547&=&format=webp&quality=lossless&width=550&height=309")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";
}

const App: React.FC = () => {
  const [ShowUi, setShowUi] = useState(false);

  useNuiEvent<boolean>('ShowUi', (isVisible) => {
    setShowUi(isVisible);
  });

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (ShowUi && e.code === 'Escape') {
        if (!isEnvBrowser()) {
          if (ShowUi) {
            fetchNui('Zoxe_Lifestyle:Close', { name: 'ShowUi' });
          }
        } else {
          setShowUi(false);
        }
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [ShowUi]);

  return (
    <>
      {ShowUi && <Select visible={ShowUi} />}
    </>
  );
};

export default App;

