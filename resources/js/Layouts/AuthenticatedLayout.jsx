import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const backgroundImageUrl = '/img/2.jpg';
    const backgroundImageUrl2 = '/img/men.jpeg';
    const backgroundImageUrl3 = '/img/woman.jpeg';
    const backgroundImageUrl4 = '/img/kid3.jpg';
    const backgroundImageUrl5 = '/img/discount.jpg';
    const backgroundImageUrl6 = '/img/men.jpg';
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100" style={{ 
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}>
            <nav className="bg-transparent border-gray-100">
                <div className="max-w-7xl mx-auto" >
                    <div className="flex justify-between h-16" >
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                {/* <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link> */}
                            </div>

                            <div className="hidden  sm:-my-px sm:ms-3 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Men
                                </NavLink>
                                
                            </div>
                            <div className="hidden  sm:-my-px sm:ms-3 sm:flex">
                                <NavLink href={route('carts.index')} active={route().current('carts.index')}>
                                    Women
                                </NavLink>
                            </div>
                            <div className="hidden  sm:-my-px sm:ms-3 sm:flex">
                                <NavLink href={route('carts.index')} active={route().current('carts.index')}>
                                    Kids
                                </NavLink>
                            </div>
                            <div className="hidden  sm:-my-px sm:ms-3 sm:flex">
                                <NavLink href={route('carts.index')} active={route().current('carts.index')}>
                                    New & Featured
                                </NavLink>
                            </div>
                            <div className="hidden  sm:-my-px sm:ms-3 sm:flex">
                                <NavLink href={route('carts.index')} active={route().current('carts.index')}>
                                    Gift
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <a
                                href={route('carts.index')}
                                className="inline-flex items-center px-2 py-2 rounded-md text-black bg-transparent hover:text-black focus:outline-none transition ease-in-out duration-150"
                                style={{ marginRight: '1px' }}>
                                <FaShoppingCart className="h-5 w-5 mr-2" color="white"/>
                            </a>
                            <div className="ms-3 relative">
                                
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-white hover:text-black focus:outline-none transition ease-in-out duration-150"
                                            >
                                                Hi, {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                        
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                </nav>
                <div className='animate-slide-down'>
                    <div>
                        <div className="font-semibold text-center box-content h-[200px] w-[1270px] ml-14 mt-[180px] text-white text-[60px]">
                            Trusted Hiking Gear For Your Adventures
                        </div>
                        <a href="">
                            <svg width="60px" height="60px" className="ml-[650px] mt-[130px] animate-bounce" viewBox="0 0 20.00 20.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg>
                        </a>
                    </div>
                    <div className="text-right text-white font-mono -mt-[240px] mr-[130px]">
                        <span className='bg-black'>- Bringing You Closer To Nature</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-[15px] mb-[20px]'>
                    <p className='text-center font-bold text-[40px] font-["MyCustomFont-Bold"]'>- CATEGORY -</p>
                    <p className='text-center text-[15px] font-["MyCustomFont-Regular'>Discover comfortable and functional hiking apparel that keeps you protected and lets you move freely on the trails</p>
                </div>
                <div className='flex'>
                    <div className='flex flex-wrap'>  <a href="" id='men' onClick={() => handleCategoryClick('Men')} style={{
                        backgroundImage: `url(${backgroundImageUrl2})`,
                        width: '250px',
                        height: '400px',
                        backgroundSize: '300px',
                        borderRadius: '10px',
                        fontSize: '40px',
                        }} className='ml-[20px] mt-[20px] flex items-center justify-center font-["MyCustomFont-Bold"] text-white text-[40px] grayscale hover:grayscale-0'>
                        Men
                        </a>
                        <div className='grid-rows'>
                        <a href="" style={{
                            backgroundImage: `url(${backgroundImageUrl3})`,
                            width: '300px',
                            height: '200px',
                            backgroundSize: '300px',
                            borderRadius: '10px',
                            fontSize: '40px',
                        }} className='ml-[10px] mt-[20px] flex items-center justify-center font-["MyCustomFont-Bold"] text-white text-[40px] grayscale hover:grayscale-0'>
                            Women
                        </a>
                        <a href="" style={{
                            backgroundImage: `url(${backgroundImageUrl4})`,
                            width: '300px',
                            height: '180px',
                            backgroundSize: '300px',
                            borderRadius: '10px',
                            fontSize: '40px',
                        }} className='ml-[10px] mt-[20px] flex items-center justify-center font-["MyCustomFont-Bold"] text-white text-[40px] grayscale hover:grayscale-0'>
                            Kid
                        </a>
                        </div>
                    </div>
                    <div className='w-1/2 ml-[80px] shadow-md mt-[20px] rounded-[10px] flex'>
                        <div style={{
                            backgroundImage: `url(${backgroundImageUrl5})`,
                            width: 900,
                            height: 400,
                            borderRadius: '10px',
                            backgroundSize: 280,  }}>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[30px] text-left font-["MyCustomFont-Bold"] mt-[px] ml-[20px] overflow-hidden text-clip'>  Elevate Now Your Hiking Experience<br/>Save Up to 25% Off</span>
                            <span className='mt-[20px] ml-[20px]'><span className='font-bold italic font-["MyCustomFont-Bold"]'>Ready to conquer the trails?</span> <span className='font-["MyCustomFont-Regular"]'>Gear up for your next adventure with incredible savings on all the essentials you need. we have everything to make your next trek unforgettable.</span></span>
                            <div className='flex flex-row mt-[10px]'>
                                <span className='text-[80px] ml-[20px] font-bold'>50%</span>
                                <div className='flex flex-col'>
                                    <span className='mt-[25px] ml-[15px] font-["MyCustomFont-Regular"]'>Don't Miss Out!!!</span>
                                    <button type='button' className='ml-[15px] mt-[14px] bg-black rounded-md text-white font-["MyCustomFont-Bold"]'>Shop Now!!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-[15px] mb-[20px]'>
                    <p className='text-center text-[40px] font-["MyCustomFont-Bold"]'>- PRODUCT -</p>
                    <p className='text-center text-[15px] font-["MyCustomFont-Regular"]'>Stay cool and dry on the trail with our functional hiking apparel.</p>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                {/* <Carousel>
                <div className='carousel grid grid-cols-5 mr-[15px]'>
                    
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                    <div className='shadow-2xl ml-[20px] text-center'>
                        <img src="img/men.jpg" width={250} height={250}/>
                         <span className='font-[MyCustomFont-Regular]'>Z-VERSAPACK SACOCHE TOTE</span>
                        <br />
                        <span className='font-[MyCustomFont-Regular] text-[12px] bg-black bg-opacity-10 rounded-sm'>Bags - Shoulder Bag</span>
                        <br />
                        <div className='mt-[20px] font-[MyCustomFont-Regular] text-orange-600 text-[20px]'>
                            <span>Rp. <span></span>215.200</span>
                        </div>
                        <button className='mt-[10px] bg-black rounded-md text-white pl-[70px] pr-[70px] pt-[3px] pb-[3px] mb-[10px]'>Add To Cart</button>
                    </div>
                </div>
                </Carousel> */}
            </div>
            asdkakdasdasdasdsandksandsa
        </div>
    );
}
