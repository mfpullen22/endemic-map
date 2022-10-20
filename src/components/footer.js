import React from "react";
import UMN from "../images/UMN.png";
import WUSTL from "../images/WUSTL-3.webp";

function Footer(){
    return (
        <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img className="h-24" src={WUSTL} alt="Washington University in St. Louis logo" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img className="h-24" src={UMN} alt="University of Minnesota Logo" />
            </div>
        </div>
            <p className="mt-8 text-center text-base text-gray-400">
                A collaboration between Washington University in St. Louis and the University of Minnesota.
            </p>
            <p className="text-center text-base text-gray-400">
                Created by <a href="https://experts.umn.edu/en/persons/matthew-f-pullen"><u>Matthew F. Pullen MD</u></a>
            </p>
        </div>
      </footer>
    )
}

export default Footer;