import './App.scss';
import {AppRouter} from '@/app/router.tsx';
import {useAuthListener} from '@/shared/hooks/useAuthListener.ts';

function App() {
    useAuthListener();

    return (
        <AppRouter/>
    );
}

export default App;
