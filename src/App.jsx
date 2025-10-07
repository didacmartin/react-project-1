import MealCard from './components/MealCard';

function App() {
    return (
        <div>
            <h1>Buscador de Comidas</h1>
            <MealCard
                image="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
                title="Spaghetti Carbonara"
                description="Un clásico plato italiano hecho con pasta, huevos, queso parmesano, panceta y pimienta negra."
            />
        </div>
    );
}

export default App;
