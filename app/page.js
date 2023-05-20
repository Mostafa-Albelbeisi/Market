import Stripe from 'stripe'
import ProductCard from './ProductCard'
import OurServices from '@/app/OurServices'
// import FirstPage from '@/FirstPage'
import Link from 'next/link'



async function getStripeProduction() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {
  const products = await getStripeProduction()
  // console.log(products)
  // Initialization for ES Users


  return (
    <main className='p-4 flex flex-col'>


      <div className="flex justify-between mx-[5rem] py-5 px-[2rem]">
        <div className="my-[1px]">
          <div className="w-[10rem] h-[5rem] my-28">
            <img className="" src="/medal.png" />
          </div>
          <h1 className="text-[40px] font-bold -mt-3">Best Quality</h1>
          <p className='text-[50px] font-bold -mt-5'>Medicine in 2023</p>
          <p>Our products are world best product.We sell the real projects. <br />Welcome to our shop.</p>
          <button className='items-center ml-[0rem] bg-[#1D4ED7] px-3 py-3 my-5 rounded-lg text-[#fff] hover:bg-[#14279B]'>Explore our shop</button>
        </div>
        <img className="rounded-md" src="https://media.istockphoto.com/id/1133376756/vector/pharmacy-business-medicine-drug-store-character-pharmacist-care-for-patient-professional.jpg?s=612x612&w=0&k=20&c=yvm4sWzGRtv1DcWOyFC-_al1XRApfIpTzLD3j3rdges=" />
      </div>


      <OurServices />

      <div className="">
                <h1 className="text-center font-bold text-[30px] text-[#374151] decoration-inherit">Our <span className="text-[#2563EB] inline-block border-b-4 border-[#2563EB]">Services</span></h1>

                <div className="flex justify-between p-10">

                    <div className="max-w-sm p-6 w-[50rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className='w-[5rem] h-[5rem] text-center ml-[7rem] m-5' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="group-support"><path fill="#00efd1" d="M427.34,247.94a129.311,129.311,0,1,1-57.92-13.69A129.157,129.157,0,0,1,427.34,247.94ZM391.03,433.37a11,11,0,1,0-11,11A10.994,10.994,0,0,0,391.03,433.37Z"></path><path fill="#fedb41" d="M427.34 203.75v44.19a129.311 129.311 0 0 0-129.08 7.66V239a66.456 66.456 0 0 0-25.52-52.52l.27-.35c8.1-28.11 33.82-49.06 64.78-49.06h23.08A66.573 66.573 0 0 1 427.34 203.75zM394 64.66v.33a44.937 44.937 0 0 1-44.6 44.93h-.65A45.23 45.23 0 0 1 303.5 64.71v-.09a45.221 45.221 0 0 1 45.21-45.21h.06A45.232 45.232 0 0 1 394 64.62z"></path><circle cx="380.03" cy="433.37" r="11" fill="#fedb41"></circle><path fill="#00acea" d="M298.26 239v16.6a129.757 129.757 0 0 0-47.04 55.64l-.3-.13H142.02V238.78a66.57 66.57 0 0 1 66.69-66.47h23.08A66.583 66.583 0 0 1 298.26 239zM265.39 99.44v.02a45.232 45.232 0 0 1-45.21 45.23h-.04a45.23 45.23 0 0 1-45.25-45.21v-.06A45.232 45.232 0 0 1 220.1 54.19h.06A45.232 45.232 0 0 1 265.39 99.4z"></path><path fill="#fedb41" d="M167.27 186.65l.02.02a66.469 66.469 0 0 0-25.27 52.11v37.08H13.42V203.53A66.564 66.564 0 0 1 80.1 137.07h22.87C132.83 137.12 159.06 157.94 167.27 186.65zM136.78 64.62v.04a46.491 46.491 0 0 1-13.51 32.1 44.678 44.678 0 0 1-31.74 13.16A45.23 45.23 0 0 1 46.28 64.71v-.07A45.232 45.232 0 0 1 91.49 19.41h.06A45.232 45.232 0 0 1 136.78 64.62z"></path><path fill="#f4b844" d="M432.54 357.39h-14V343.01a44.315 44.315 0 0 0-14.1-32.281 50.132 50.132 0 0 0-34.409-13.679c-26.675 0-48.414 20.617-48.414 45.96v14.38h-14V343.01c0-33.062 28.02-59.96 62.46-59.96a64.112 64.112 0 0 1 44.014 17.538A58.189 58.189 0 0 1 432.54 343.01zM411.03 440.69h-20a7 7 0 0 1 0-14h20a5.006 5.006 0 0 0 5-5v-15a7 7 0 0 1 14 0v15A19.021 19.021 0 0 1 411.03 440.69z"></path><path fill="#fedb41" d="M380.03,451.37a18,18,0,1,1,18-18A18.021,18.021,0,0,1,380.03,451.37Zm0-22a4,4,0,1,0,4,4A4,4,0,0,0,380.03,429.37Z"></path><polygon fill="#fedb41" points="438.14 357.39 438.14 406.35 410.75 406.35 410.75 357.39 425.54 357.39 438.14 357.39"></polygon><polygon fill="#fedb41" points="329.41 357.39 329.41 406.35 299.92 406.35 299.92 357.39 314.62 357.39 329.41 357.39"></polygon></svg>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pharmacy Help Line</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Do you need answers to questions about prescription drugs? We’re here</p>
                        <Link href={"/Contact"} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#2563EB] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Learn more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="max-w-sm p-6 w-[50rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className='w-[5rem] h-[5rem] text-center ml-[7rem] m-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="medicine"><path fill="#fff5cb" d="M25.52 28.23c-5.28-5.28-13.87-5.28-19.15 0-5.28 5.28-5.28 13.87 0 19.15 2.64 2.64 6.11 3.96 9.57 3.96s6.93-1.32 9.57-3.96c2.56-2.56 3.97-5.96 3.97-9.57s-1.41-7.03-3.96-9.58z"></path><path fill="#f9f0ca" d="M15.94 51.33c3.47 0 6.93-1.32 9.57-3.96 2.56-2.56 3.97-5.96 3.97-9.57s-1.41-7.02-3.97-9.57L6.37 47.37a13.5 13.5 0 0 0 9.57 3.96z"></path><path fill="#e0d5a4" d="M7.49 27.23a13.13 13.13 0 0 0-2.12 2.12l19.02 19.02a13.13 13.13 0 0 0 2.12-2.12L7.49 27.23z"></path><path fill="#c5fffd" d="M46.85 7.23c-8.08 0-14.65 6.57-14.65 14.65V36.7c0 8.08 6.57 14.65 14.65 14.65S61.5 44.77 61.5 36.69V21.88c0-8.08-6.57-14.65-14.65-14.65z"></path><path fill="#faa916" d="M30.2 10.15c-.56-1.71-2.18-2.88-4.57-3.29-2.05-.35-4.5-.11-6.92.68-5.47 1.79-8.78 5.63-7.71 8.91.73 2.23 3.25 3.47 6.5 3.47 1.54 0 3.24-.28 4.99-.85 5.47-1.81 8.78-5.64 7.71-8.92z"></path><path fill="#ff6663" d="M46.85 7.23c-8.08 0-14.65 6.57-14.65 14.65v7.41h29.3v-7.41c0-8.08-6.57-14.65-14.65-14.65z"></path><path fill="#b2edea" d="M46.85 7.23c-.25 0-.49.02-.73.04V51.3c.24.01.49.04.73.04 8.08 0 14.65-6.57 14.65-14.65V21.88c0-8.08-6.57-14.65-14.65-14.65z"></path><path fill="#ed5454" d="M46.85 7.23c-.25 0-.49.02-.73.04v22.02H61.5v-7.41c0-8.08-6.57-14.65-14.65-14.65z"></path><path fill="#ffc064" d="M25.63 6.85c-2.05-.35-4.5-.11-6.92.68-4.71 1.54-7.81 4.59-7.9 7.51 1.14 1.4 3.22 2.17 5.77 2.17 1.54 0 3.24-.28 4.99-.85 4.71-1.55 7.81-4.6 7.9-7.52-.81-1-2.13-1.69-3.84-1.99z"></path><path fill="#c1b584" d="m17 36.74-2.12 2.12 9.51 9.51a13.13 13.13 0 0 0 2.12-2.12L17 36.74z"></path></svg>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Specialty Medications</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Some patients require specialty drugs for chronic or complex condition</p>
                        <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#2563EB] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Learn more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="max-w-sm p-6 w-[50rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <svg className='w-[5rem] h-[5rem] text-center ml-[7rem] m-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="cannabis-drugs"><g data-name="Filled outline"><path fill="#c78700" d="M59.32 20.8 54 17v-4H34v4l-5.32 3.8A4 4 0 0 0 27 24.06V57a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V24.06a4 4 0 0 0-1.68-3.26Z"></path><path fill="#ffc834" d="M27 24.06V56h34V24.06a4 4 0 0 0-.58-2.06H27.58a4 4 0 0 0-.58 2.06Z"></path><rect width="26" height="10" x="31" y="3" fill="#212529" rx="2"></rect><path fill="#004a31" d="M46.5 33a12.55 12.55 0 0 0-2.5-7 12.55 12.55 0 0 0-2.5 7 12.55 12.55 0 0 0 2.5 7 12.55 12.55 0 0 0 2.5-7zm7.26 6.68a10.17 10.17 0 0 0 3-4.91 9.27 9.27 0 0 0-5.57 1.87A11.8 11.8 0 0 0 48 41.77a10.84 10.84 0 0 0 5.76-2.09zM50 48.87a6.85 6.85 0 0 0 4.36.59A6.78 6.78 0 0 0 51.62 46a6.78 6.78 0 0 0-4.36-.59A6.82 6.82 0 0 0 50 48.87zm-15.76-9.19a10.17 10.17 0 0 1-3-4.91 9.27 9.27 0 0 1 5.57 1.87A11.8 11.8 0 0 1 40 41.77a10.84 10.84 0 0 1-5.76-2.09zm3.81 9.19a6.85 6.85 0 0 1-4.36.59A6.78 6.78 0 0 1 36.38 46a6.78 6.78 0 0 1 4.36-.59 6.82 6.82 0 0 1-2.69 3.46z"></path><path fill="#a66d00" d="M33.26 61a6.49 6.49 0 0 0-4.68-11H27v7a4 4 0 0 0 4 4Z"></path><path fill="#e9a300" d="M28.58 50H27v6h8a6.51 6.51 0 0 0-6.42-6Z"></path><rect width="9" height="22.15" x="17.5" y="45.42" fill="#d7e6ef" rx="4.5" transform="rotate(90 22 56.5)"></rect><path fill="#004a31" d="M22 61h-6.58a4.5 4.5 0 0 1 0-9H22Z"></path><rect width="9" height="22.15" x="7" y="40.92" fill="#d7e6ef" rx="4.5" transform="rotate(-135 11.499 52)"></rect><path fill="#ffc834" d="M8.32 48.82 13 44.17a4.5 4.5 0 0 1 6.36 6.36l-4.65 4.65Z"></path><circle cx="5" cy="5" r="2" fill="#004a31"></circle><path fill="#a66d00" d="M34 13h20v4H34z"></path><g fill="#1e120b"><path d="M44 41a1 1 0 0 0 .78-.38A13.49 13.49 0 0 0 47.5 33a13.49 13.49 0 0 0-2.72-7.62 1 1 0 0 0-1.56 0A13.49 13.49 0 0 0 40.5 33a13.49 13.49 0 0 0 2.72 7.62A1 1 0 0 0 44 41zm0-13.17A10.88 10.88 0 0 1 45.5 33a10.88 10.88 0 0 1-1.5 5.17A10.88 10.88 0 0 1 42.5 33a10.88 10.88 0 0 1 1.5-5.17zm3.18 14.55a1 1 0 0 0 .79.39 11.86 11.86 0 0 0 6.44-2.32A11.29 11.29 0 0 0 57.76 35a1 1 0 0 0-.95-1.23 10.27 10.27 0 0 0-6.25 2.1A12.74 12.74 0 0 0 47 41.49a1 1 0 0 0 .18.89zm4.67-5a7.49 7.49 0 0 1 3.46-1.49 8.5 8.5 0 0 1-2.19 3 8.55 8.55 0 0 1-3.58 1.61 9.61 9.61 0 0 1 2.31-3.1zm.27 7.73a7.89 7.89 0 0 0-5.08-.7 1 1 0 0 0-.74 1.28 7.89 7.89 0 0 0 3.15 4.05 7.83 7.83 0 0 0 5.08.7 1 1 0 0 0 .73-1.28 7.79 7.79 0 0 0-3.14-4.05zM50.45 48a4.87 4.87 0 0 1-1.68-1.74 4.93 4.93 0 0 1 2.35.59 4.84 4.84 0 0 1 1.67 1.74 4.89 4.89 0 0 1-2.34-.59zm-16.86-7.55A11.86 11.86 0 0 0 40 42.77a1 1 0 0 0 1-1.28 12.74 12.74 0 0 0-3.55-5.62 10.29 10.29 0 0 0-6.25-2.1 1 1 0 0 0-1 1.23 11.29 11.29 0 0 0 3.39 5.45zm2.56-3.05a9.61 9.61 0 0 1 2.31 3.13 8.55 8.55 0 0 1-3.58-1.61 8.45 8.45 0 0 1-2.19-3 7.49 7.49 0 0 1 3.46 1.48zM41 44.41a7.89 7.89 0 0 0-5.08.7 7.79 7.79 0 0 0-3.14 4 1 1 0 0 0 .73 1.28 7.83 7.83 0 0 0 5.08-.7 7.89 7.89 0 0 0 3.15-4.05 1 1 0 0 0-.74-1.23zM37.55 48a4.89 4.89 0 0 1-2.34.59 4.84 4.84 0 0 1 1.67-1.74 5 5 0 0 1 2.35-.59A4.87 4.87 0 0 1 37.55 48zM44 47a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"></path><circle cx="44" cy="44" r="1"></circle><path d="M36 10a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"></path><path d="M59.91 20 55 16.49V14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H33a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3v2.49L28.09 20A5 5 0 0 0 26 24.06V51h-5.76a5.49 5.49 0 0 0-8-7.54L3 52.76a5.53 5.53 0 0 0 0 7.78 5.59 5.59 0 0 0 8.28-.5 5.43 5.43 0 0 0 4.18 2H57a5 5 0 0 0 5-5V24.06A5 5 0 0 0 59.91 20zm-6.23-2 4.2 3H30.12l4.2-3zM32 11V5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H33a1 1 0 0 1-1-1zm21 3v2H35v-2zM28 24.06a3 3 0 0 1 .22-1.06h31.56a3 3 0 0 1 .22 1.06V55H33.86a5.5 5.5 0 0 0-5.28-4H28zM13.68 44.87a3.5 3.5 0 1 1 4.95 5l-3.95 4-4.95-5zM4.37 59.13a3.53 3.53 0 0 1 0-5l4-4 4.95 5-3.95 4a3.51 3.51 0 0 1-5 0zm8.29-.51L18.28 53H21v7h-5.58a3.47 3.47 0 0 1-2.76-1.38zM23 60v-7h5.58a3.5 3.5 0 0 1 0 7zm34 0H32.82a5.51 5.51 0 0 0 1.23-3H60a3 3 0 0 1-3 3zM5 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 8a1 1 0 0 0-1 1v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-1-1z"></path><path d="M19 32a1 1 0 0 0-1 1v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-1-1Z"></path></g></g></svg>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pharmacy Claims</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Search our formulary list of preferred drugs. Find a pharmacy clinical</p>
                        <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#2563EB] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Learn more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>

            </div>

      <div className='p-10'></div>
      <h1 className='text-center font-bold text-[30px] text-[#374151] decoration-inherit'>Our <span className='text-[#2563EB] inline-block border-b-4 border-[#2563EB]'>Products</span></h1>
      <div className='my-[5rem] max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map((product, productIndex) => {
          return (

            // <div className=' max-w-[1000px] w-full mx-auto'>
            <ProductCard key={productIndex} product={product} className="hover:scale-110" />
            // </div>
          )
        })}
      </div>
    </main>
  )
}
