import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .order("name", { ascending: true })

    if(error){
        throw new Error("Error while getting cabin's data")
    }
  
    return data;
}

export async function createCabin(newCabin) {
    const {data, error} =await supabase.from("cabins").insert([newCabin])

    if(error){
        throw new Error("Error while creating new cabin")
    }
    return data;
}

export async function deleteCabin(id){
    const {data, error} = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

    if(error){
        throw new Error("Error while deleting cabin")
    }
  
    return data;
}