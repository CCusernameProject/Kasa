import LogementsDiplay from './LogementsDisplay'
import CardTitle from '../CardTitle'

const MainHomeComponent = () => {
    return (
        <main className='MainHome'>
            <CardTitle class="MainHome"/>
            <div className='MainHome--BoxLogements'>
                <LogementsDiplay />
            </div>
        </main>
    )
}

export default MainHomeComponent