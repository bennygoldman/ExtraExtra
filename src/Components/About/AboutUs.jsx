import { Dialog } from '@mui/material'
import './ModalStyle.scss';

const AboutUs = ({ openAboutUs, handleCloseAboutUs }) => {
    return (
        <Dialog open={openAboutUs} onClose={handleCloseAboutUs} className='w-full'>
            <section className='md:text-[20px] px-4 py-4 flex flex-col justify-center'>
                <p className=''>ExtraExtra was created, designed, and developed in Toronto by Benjamin Stubina and Benny Goldman. It was built using ReactJS, TailwindCSS, Express, NodeJS, and MongoDB. </p>
                <p className='my-4'>Benjamin and Benny are recent coding bootcamp grads seeking job opportunities.</p>
                <p>Get in touch:</p>
                <ul className='flex gap-12'>
                    <li>Benjamin Stubina
                        <ul className='flex flex-col'>
                            <li><a href="https:github.com/BenjaminStubina">Github</a></li>
                            <li><a href="https:www.linkedin.com/in/benjamin-stubina/">LinkedIn</a></li>
                        </ul>
                    </li>
                    <li>Benny Goldman
                        <ul>
                            <li><a href="https:github.com/bennygoldman">Github</a></li>
                            <li><a href="https:www.linkedin.com/in/bennygoldman/">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </Dialog>
    )
}

export default AboutUs