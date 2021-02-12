import Link from 'next/link';

const Navbar = () => (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link href="/"><a class="navbar-brand" >Home</a></Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link href="/phonology"><a class="nav-link">Phonology</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/morphology"><a class="nav-link" >Morphology</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
);

export default Navbar;