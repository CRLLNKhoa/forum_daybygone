"use server";
import createSupabaseServerClient from "@/lib/supabse";
import { currentUser } from "@clerk/nextjs/server";

export async function getLog() {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", user?.username);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailLog(id:number) {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("log")
        .select("*")
        .eq("id",id);
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }

export async function getAllLog(page:number) {
    try {
      const supabase = await createSupabaseServerClient();
      const startIndex = (page - 1) * 12;
      var endIndex = startIndex + 12;
      const { data: log } = await supabase
      .from("log")
      .select("id")
      const { data, error } = await supabase
        .from("log")
        .select("*").range(startIndex,endIndex -1).order("created_at",{ascending: false})
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data, count: log?.length, currentPage: page };
    } catch (error) {
      console.log(error);
    }
  }

export async function addLog(newLog: any) {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .insert([{ ...newLog, player: user?.username || "Idol ẩn danh" }])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLog(id:number) {
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
    .from('log')
    .delete()
    .eq('id', id)
    if (error) {
      return { status: 400};
    } else return { status: 200};
  } catch (error) {
    console.log(error);
  }
}

export async function getLogs(player:string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", player);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getLogined() {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 400, isLogin: false };
    } else return { status: 200, isLogin: true };
  } catch (error) {
    console.log(error);
  }
}

export async function getLogHomePage() {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("log")
        .select("*").limit(6).order("created_at",{ascending: false})
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }


  export async function addCmt(content: any, id: number) {
    try {
      const supabase = await createSupabaseServerClient();
      const user = await currentUser();
      const { data, error } = await supabase
        .from("cmt")
        .insert([{ content: content, log_id: id, name: user?.username || "Idol ẩn danh", avatar: user?.imageUrl }])
        .select("*");
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }


  export async function getCmts(id: number) {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("cmt").select("*").eq("log_id", id)
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }