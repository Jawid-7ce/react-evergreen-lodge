import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
    .from('cabins')
    .select('*')

    if(error){
        throw new Error("Error while getting cabin's data")
    }
  
    return data;
}