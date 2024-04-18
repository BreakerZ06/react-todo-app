import './App.scss'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <section className='todoapp'>
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  )
}
export default App;
