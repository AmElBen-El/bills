import Image from "next/image";
export default function AboutUs() {
    return (
        <div className=" bg-gray-200 gap-30 mx-auto pb-5 px-3 w-2/3 justify-center text-1xl text-left md:px-8 lg:px-16 ">
            <br/>
            <hi className="text-3xl pb-5 pt-5  gap-30 font-bold "> About Us - Simple Money Help from Bills.com</hi> <br/><br/><br/>
            
            <div className="p-2 bg-white rounded-2xl"  >
              <h2 className="text-3xl text-left pb-1 font-[600] leading-[60px]">Mortgages</h2>
                <Image width={200} height={200} src="/room.jpeg" className="py-2" />                
                 <p>Bills.com is a leading destination for consumers looking to learn about mortgages and evaluate their current mortgage situation. <br/> Find guides, articles, and advice to educate yourself on home purchase loans, mortgage refinancing, and home equity loans.<br/>
                 Use mortgage tools and calculators to find out if you are ready to purchase a home or refinance your mortgage.</p>

            <h2 className="text-3xl mt-5 pb-2">
                Reverse Mortgage
            </h2>

            <Image width={200} height={200} src="/flowers.jpeg" className="py-2" />
            <p>
            Learn how a reverse mortgage works and what it takes to qualify for a reverse mortgage loan on Bills.com. Should you decide that a reverse mortgage is right for you, Bills.com can help you find qualified lenders in your area.
            </p>

            <h2 className="text-3xl mt-5 pb-2">
                Dept Help
            </h2>
            <Image width={200} height={200} src="/calculator.jpeg" className="py-2"/>
            <br/>
            <p>
            Debt help doesn't have to be a DIY solution. Seek professional debt help.
            </p>
            <p>
            Bills.com helps consumers struggling under the burden of debt to find the best program for their needs so they can get back on the path to financial freedom.<br/>

            Bills.com also has thousands of articles and consumer guides to empower you to take control of your finances. Compare various debt relief alternatives, including debt consolidation, credit counseling, and debt resolution, and let Bills.com help you find qualified debt help service providers that meet your individual needs.
            </p> <br/>
            <h2 className="text-3xl mt-5 pb-2">
                Ask Bill
            </h2>
            <Image width={200} height={200} src="/happy-couple-1.jpeg" className="py-2"/>          
            <p>
            Receive free personalized advice directly from Bill! Bills.com's comment feature allows you to submit any financial question to our panel of financial experts and to receive a personalized answer.
            </p>
            <h2 className="text-3xl mt-5 pb-2">
                Credit Report & Score
            </h2>
            <Image width={200} height={200} src="/coins.jpeg" className="py-2" />
            <p>
            Your credit is one of the most important factors in your personal finances. Bills.com can help you learn how your credit history impacts you. Learn how you can access your credit report and credit score, what improves or harms your credit, and the steps you can take to fix inaccurate marks in your credit report that may be dragging down your credit score.
            </p>
            <h2 className="text-3xl mt-5 pb-2">
            Insurance, Auto Loans, & Student Loans
            </h2>
            <Image width={200} height={200} src="/happy-couple-3.jpeg" className="py-2" />            
            <p>
            Bills.com offers information and help with insurance, auto, and student loans. Through its partners, Bills.com can match you with providers to compare rates and get the best offer possible. Bills.com is currently working on expanding the insurance, auto, and student loan network to provide you with more options in the future.</p>
                                            
            </div>
        </div>
    );
}