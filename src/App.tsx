import { useTranslation } from 'react-i18next';
import './translations/i18n';

function App() {
  const { t } = useTranslation('translation');

  return (
    <div>
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
