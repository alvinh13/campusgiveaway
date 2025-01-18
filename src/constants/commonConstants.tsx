import { GrSchedule } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import {
  BooksImage,
  ClosetImage,
  FurnitureImage,
  GadgetsImage,
} from './importConstants';

// USER SIDEBAR CONSTANTS

export const adminOptions = [
  {
    name: 'Dashboard',
    link: '/user/dashboard',
    icon: <MdSpaceDashboard />,
  },
  {
    name: 'Schedules',
    link: '/user/schedule',
    icon: <IoCalendarNumberSharp />,
  },
  { name: 'Employees', link: '/user/employees', icon: <FaUserFriends /> },
  { name: 'Profile', link: '/user/profile', icon: <ImProfile /> },
];
export const supervisorOptions = [
  {
    name: 'Schedules',
    link: '/user/schedules',
    icon: <IoCalendarNumberSharp />,
  },
  { name: 'Employees', link: '/user/employees', icon: <FaUserFriends /> },
  { name: 'Profile', link: '/user/profile', icon: <ImProfile /> },
];
export const employeeOptions = [
  {
    name: 'Schedules',
    link: '/user/schedules',
    icon: <IoCalendarNumberSharp />,
  },
  { name: 'Employees', link: '/user/employees', icon: <FaUserFriends /> },
  { name: 'Profile', link: '/user/profile', icon: <ImProfile /> },
];

//LANDING PAGE CONSTANTS

export const NAVLINKS = [
  { name: 'Free Books', id: 2, value: 'books', link: '/take' },
  { name: 'Free Furniture', id: 1, value: 'furniture', link: '/take' },
  { name: 'Free Electronics', id: 3, value: 'electronics', link: '/take' },
  { name: 'Free Tutoring', id: 4, value: 'tutoring', link: '/take' },
  // { name: 'Donate', link: id: 5, value: 'tutoring', '/give' },
];

export const OFFEREDITEMS = [
  {
    name: 'Furniture',
    para: 'One of the most common items to giveaway when moving out',
    subtile: 'Reduce furniture waste',
    image: FurnitureImage,
  },
  {
    name: 'Books',
    para: `Don't let the source of knowledge go to waste. Pass on essential educational materials to your juniors and fellow peers`,
    subtile: `Pass down academic books`,
    image: BooksImage,
  },
  {
    name: 'Gadgets',
    para: 'The best way to recycle your unwanted electronics and reduce the amount of e-waste',
    subtile: 'Reduce E-waste',
    image: GadgetsImage,
  },
  {
    name: 'Closet',
    para: 'A suit, blazer or a perhaps a winter jacket. Whatever is out of fashion for you could be in fashion for someone else',
    subtile: `Others might like what you have`,
    image: ClosetImage,
  },
];

export const BANNERBUTTONS = [
  { name: 'Give', type: 'primary', link: '/give' },
  { name: 'Take', type: 'secondary', link: '/take' },
];

export const CATEGORIES = [
  { value: 'furniture', name: 'Furniture', id: 1 },
  { value: 'books', name: 'Books', id: 2 },
  { value: 'electronics', name: 'Electronics', id: 3 },
  { value: 'tutoring', name: 'Free Tutoring', id: 4 },
  { value: 'closet', name: 'clothes', id: 5 },
];
