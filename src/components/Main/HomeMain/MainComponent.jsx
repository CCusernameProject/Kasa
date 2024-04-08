import LogementsDiplay from './LogementsDisplay'
import CardTitle from './CardTitle'

const MainComponent = () => {
    return (
        <main className='Main'>
            <CardTitle />
            <div className='Main--BoxLogements'>
                <LogementsDiplay />
            </div>
        </main>
    )
}

export default MainComponent