import { Route, Routes } from 'react-router-dom';
import { Search } from '../SearchComponent/Search';
import { AddStudent } from '../Components/AddStudent';
import DeleteStudent from '../Components/DeleteStudent';
import { ShowStudent } from '../Components/ShowStudent';
import { UpdateStudent } from '../Components/UpdateStudent';
import './Home.css';

export function Home() {
    return (
        <>
            <div className='myDiv'>
                <section className='mySection'>

                    <Routes>
                        <Route path="/students/showall" element={<ShowStudent />}></Route>
                        <Route path="/students/add" element={<AddStudent />}></Route>
                        <Route path="/student/delete/:id" element={<DeleteStudent />}></Route>
                        <Route path="/student/update/:id" element={<UpdateStudent />}></Route>
                        <Route path="/student/search" element={<Search />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>

                </section>
            </div>
        </>
    );
}