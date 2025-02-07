import login_bg from "../../assets/login_bg.jpg";

const Register = () => {
    return (
        <div className="relative min-h-screen w-full">
            <img
                src={login_bg}
                alt="Background Image"
                className="absolute inset-0 w-full h-full object-cover filter blur-xs"
            />
            <div className="flex items-center justify-center p-6">
                <div className="mx-auto w-full max-w-md">
                    <form className="p-8 rounded-2xl bg-white/30 backdrop-blur-xl">
                        <div className="mb-4">
                            <label htmlFor="first-name" className="mb-2 block text-base font-medium text-black">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="First Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last-name" className="mb-2 block text-base font-medium text-black">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                placeholder="Last Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="mb-2 block text-base font-medium text-black">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2 block text-base font-medium text-black">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="mb-2 block text-base font-medium text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="reenter-password" className="mb-2 block text-base font-medium text-black">
                                Re-enter Password
                            </label>
                            <input
                                type="password"
                                name="reenter-password"
                                id="reenter-password"
                                placeholder="Re-enter your password"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
