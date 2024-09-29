import React from 'react';
import Image from "next/image";
import LinktreeButton from './LinktreeButton';

const BlogSection = () => {
    return (
        <section id="blog" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height  ">
            <h2 className="text-center sm:text-5xl dark:text-white text-4xl font-bold text-white mb-4">
                My Blog
            </h2>
            <p className='text-base lg:text-lg text-white text-center'> Discover the joy of reading my thoughtfully written blog posts, comprising of novels, articles and poetry. </p>
          <p className='text-base lg:text-lg text-white text-center'>  Whether you're a seasoned reader or just starting your literary journey, there's a treasure waiting for you here.</p>

            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                <li
                    className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <Image
                      src="/images/blog/looking for ene.png"
                     alt="Looking For Ene"
                     width={300}
                     height={300}
                     />
                    <h3 class="text-3xl text-center text-slate-900 dark:text-white">Looking For Ene</h3>
                </li>


                <li
                    className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                     <Image
                      src="/images/blog/The father's boy.jpg"
                     alt="The Father's Boy"
                     width={300}
                     height={300}
                     />
                    <h3 class="text-3xl text-center text-slate-900 dark:text-white">The Father's Boy</h3>
                    <p className=" sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"></p>
                    <p className=" text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                    </p>
                </li>
            </ul>

            <div className='flex flex-col sm:flex-row justify-center gap-10'>
            <LinktreeButton/>
            </div>

        </section>
    )
  }

export default BlogSection;