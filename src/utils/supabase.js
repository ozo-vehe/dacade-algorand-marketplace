import { createClient } from "@supabase/supabase-js";
import { v4 } from 'uuid';

// Create a single supabase client for interacting with your database
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92c29qcXJ0eWN5eHBlenhza3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjAzNTQsImV4cCI6MjAxNTczNjM1NH0.LSdvgK7NtKyyyaKDqte3I9pH2AtIFMyj91uxeDdEO9g';
const SUPABASE_URL = 'https://ovsojqrtycyxpezxskpy.supabase.co';

const supabase = createClient(SUPABASE_URL, ANON_KEY);

export const getUrl = async (id) => {
    // console.log(id);
    let { data, error } = await supabase
        .from('url')
        .select('*')
        .eq('id', id);

    const url = data[0].image_url;
    return error ? "id not found" : url;
}

export const saveUrl = async (url) => {
    console.log(url);
    const id = v4();
    const { error } = await supabase
        .from('url')
        .insert([
            { image_url: url, id },
        ])
        .select()

    return error ? "image not saved" : id;
}