import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';
import mongoose from 'mongoose';

export function middleware( req: NextRequest, ev: NextFetchEvent ) {

    
    const id = req.page.params?.id || '';

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    if ( !checkMongoIDRegExp.test( id as string ) ) {
        return new Response( JSON.stringify({ message: 'El id no es valido' + id }), {
            status: 400,
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    // if ( !mongoose.isValidObjectId( id ) ) {
    //     // return res.status(400).json({ message: 'El id no es valido' + id });
    //     return new Response( JSON.stringify({ message: 'El id no es valido' + id }), {
    //         status: 400,
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     })
    // }

    return NextResponse.next();
}