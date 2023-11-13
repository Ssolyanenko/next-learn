import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
    weight: '400',
    subsets: ['latin'],
})
const TheHeader = (props) => {
    return (
<div className={rubik.className}>
        <header className='header'>
            <Link href='/' className='header_img'>
            <Image
                width={255}
                height={61}
                style={{ marginRight:161}}
                src='/image11.png'
                alt='цмсу'
            />
            </Link>
            <Link className='header_item' href='/projects'>Проєкти</Link>
            <Link className='header_item' href='/services'>Послуги</Link>
            <Link className='header_item' href='/about'>Про нас</Link>
            <Link className='header_item' href='/news'>Новини</Link>
            <Link className='header_item' href='/vacancies'>Вакансії</Link>
            <h3 className='header_item'>
                <Image
                width={23}
                height={23}
                style={{ marginRight:161}}
                src='/visible1.png'
                alt='цмсу'
            /> Для людей з вадами зору</h3>
        </header>
</div>
    )

}

export {TheHeader};