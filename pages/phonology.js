import Layout from "./components/layout";

const About = () => (
    <Layout>
        <div class="container">
            <h1>Tukrøn Phonology</h1>            
            <p>One stop shop for all Tukrøn rules pertaining to pronounciation, spelling, and stress</p> 
            <div class="justify-content-center">
                <h2>IPA Consonants</h2>            
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Labial</th>
                            <th scope="col">Alveolar</th>
                            <th scope="col">Palatal</th>
                            <th scope="col">Velar</th>
                            <th scope="col">Uvular</th>
                            <th scope="col">Guttural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Plosive</th>
                            <td>b,p</td>
                            <td>t,d</td>
                            <td>c,ɟ</td>
                            <td>k</td>
                            <td>q,ɢ</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Nasal</th>
                            <td>m</td>
                            <td>n</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Fricative</th>
                            <td>f</td>
                            <td>s,z</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>h</td>
                        </tr>
                        <tr>
                            <th scope="row">Lat. Fricative</th>
                            <td></td>
                            <td>ɬ,ɮ</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Liquid</th>
                            <td></td>
                            <td>ɹ</td>
                            <td>j</td>
                            <td>w</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2>IPA Vowels</h2>            
            <div class="row justify-content-center">
                <div class="col md-8">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Front</th>
                                <th scope="col">Back</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Close</th>
                                <td>i, i:</td>
                                <td>u, u:</td>
                            </tr>
                            <tr>
                                <th scope="row">Mid</th>
                                <td>ø, ø:</td>
                                <td>o, o:</td>
                            </tr>
                            <tr>
                                <th scope="row">Open</th>
                                <td colspan="2">a, a:</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col md-3">
                    <h3>Dipththongs</h3>
                    <p>øi, iu</p>
                </div>    
            </div>
            <h2></h2>            
            <h2>IPA Vowels</h2>            
        </div>
        <style jsx>{`
        
        `}</style>
    </Layout>
);
export default About;