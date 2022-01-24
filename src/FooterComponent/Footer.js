import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 1 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="black"
        color="white"
        className='myFooter'     
      >
        <Container className='myContainer' maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box borderBottom={1}></Box>
              <ul className='myUl'>
              <li>
                
                <NavLink  color="inherit" to="/" className="footerLink">Home</NavLink>
                        
              </li>
              <li>
                
                <NavLink  color="inherit" to="/students/showall" className="footerLink">Show students</NavLink>
                        
              </li>
              <li>
                
                <NavLink  color="inherit" to="/students/add" className="footerLink">Add student</NavLink>
              </li>

              <li>
                
                <NavLink  color="inherit" to="/student/search" className="footerLink">Search student</NavLink>
              </li>
              </ul>
            </Grid>
            
          </Grid>
          <Box textAlign="center" pt={{ xs: 2, sm: 4 }} pb={{ xs: 5, sm: 0 }}>
            Neo<span style={{'color':'red'}}>SOFT</span> Technologies &copy; {new Date().getFullYear()}
            <br/>All rights reserved
          </Box>
        </Container>
      </Box>
    </footer>
  );
}