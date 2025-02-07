import login_bg from '../../assets/login_bg.jpg';
import Navbar from './../../components/global/Navbar';

const Profile = () => {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={login_bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />

      <div className="relative z-100">
        <Navbar />
      </div>

      <div className="relative z-10 flex max-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 w-[800px] m-auto bg-white/30 backdrop-blur-3xl rounded-lg p-8 shadow-2xl">
          <div className="mx-auto w-[600px]">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-semibold mb-2 text-[#424874]">
              Profile
            </h1>
            <h2 className="text-grey text-sm mb-4 text-[#424874]">Create Profile</h2>
            <form>
              <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                  <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                    <input type="file" name="profile" id="upload_profile" hidden required />
                    <label htmlFor="upload_profile">
                      <svg
                        data-slot="icon"
                        className="w-6 h-5 text-blue-700"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>

              <h2 className="text-center mt-3 font-semibold text-[#424874]">
                Upload Profile and Cover Image
              </h2>
              <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="firstName" className="mb-2 text-[#424874]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 backdrop-blur-sm placeholder-[#f4eeff]"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full mb-4 lg:mt-6">
                  <label htmlFor="lastName" className="text-[#424874]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 backdrop-blur-sm placeholder-[#f4eeff]"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                <div className="w-full">
                  <h3 className="text-[#424874] mb-2">Sex</h3>
                  <select
                    id="sex"
                    className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 backdrop-blur-sm"
                  >
                    <option disabled value="">
                      Select Sex
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="w-full">
                  <h3 className="text-[#424874] mb-2">Date Of Birth</h3>
                  <input
                    type="date"
                    id="dob"
                    className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="w-full rounded-lg bg-[#424874] hover:bg-[#Dcd6f7] hover:text-[#424874] cursor-pointer mt-4 text-[#f4eeff] text-lg font-semibold">
                <button type="submit" className="w-full p-4  cursor-pointer  ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
