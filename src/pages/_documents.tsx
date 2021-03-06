import Document, {Html, Head, Main, NextScript} from 'next/document'
import Modal from "react-modal";

export default class MyDocument extends Document{
    render() {

        Modal.setAppElement('#root');

        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                
                <link rel="shortcut icon" href="images/favicon.png" />
                </Head>

                <body>
                    <Main/>
                    <NextScript />
                    <div id="root"></div>
                </body>


            </Html>
        )
    }
}