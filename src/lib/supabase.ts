import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

// Only create clients if environment variables are properly configured
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
  
export const supabaseAdmin = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

// Types for our database tables
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
  specifications: {
    dimensions: string;
    materials: string;
    colors: string;
    ratedVoltage: string;
    lightingPower: string;
    typicalConsumption: string;
    freshAirVentilation: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface WebsiteContent {
  id: string;
  page_name: string;
  section_key: string;
  content_type: 'text' | 'image_url';
  value: string;
  created_at?: string;
  updated_at?: string;
}

export interface Profile {
  id: string;
  username?: string;
  is_admin: boolean;
  created_at?: string;
}

// Helper functions for authentication
export const getCurrentUser = async () => {
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getCurrentUserProfile = async () => {
  if (!supabaseAdmin) return null;
  const user = await getCurrentUser();
  if (!user) return null;
  
  // Use admin client to bypass RLS for admin table queries
  const { data, error } = await supabaseAdmin
    .from('admin')
    .select('*')
    .eq('id', user.id)
    .single();
    
  if (error) {
    // If no admin record exists, return null instead of throwing error
    if (error.code === 'PGRST116') {
      return null;
    }
    console.error('Error fetching user profile:', error.message);
    return null;
  }
  
  return data as Profile;
};

export const isUserAdmin = async () => {
  const profile = await getCurrentUserProfile();
  return profile?.is_admin || false;
};

// Helper functions for products
export const getProducts = async () => {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
  return data as Product[];
};

export const getProductById = async (id: string) => {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  
  return data as Product;
};

// Helper functions for website content
export const getWebsiteContent = async (page_name?: string) => {
  if (!supabase) return [];
  let query = supabase.from('website_content').select('*');
  
  if (page_name) {
    query = query.eq('page_name', page_name);
  }
  
  const { data, error } = await query.order('page_name', { ascending: true });
    
  if (error) {
    console.error('Error fetching website content:', error);
    return [];
  }
  
  return data as WebsiteContent[];
};

export const getContentByKey = async (page_name: string, section_key: string) => {
  // Return null if Supabase is not configured
  if (!supabase) {
    console.warn('Supabase not configured - using fallback content');
    return null;
  }
  
  const { data, error } = await supabase
    .from('website_content')
    .select('*')
    .eq('page_name', page_name)
    .eq('section_key', section_key)
    .single();
    
  if (error) {
    console.error('Error fetching content:', error);
    return null;
  }
  
  return data as WebsiteContent;
};

// Helper functions for product management (CRUD operations)
export const createProduct = async (product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();
    
  if (error) {
    console.error('Error creating product:', error);
    throw error;
  }
  
  return data as Product;
};

export const updateProduct = async (id: string, updates: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
    
  if (error) {
    console.error('Error updating product:', error);
    throw error;
  }
  
  return data as Product;
};

export const deleteProduct = async (id: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
  
  return true;
};
// Helper functions for website content management (CRUD operations)
export const createWebsiteContent = async (content: Omit<WebsiteContent, 'id' | 'created_at' | 'updated_at'>) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase
    .from('website_content')
    .insert([content])
    .select()
    .single();
    
  if (error) {
    console.error('Error creating website content:', error);
    throw error;
  }
  
  return data as WebsiteContent;
};

export const updateWebsiteContent = async (id: string, updates: Partial<Omit<WebsiteContent, 'id' | 'created_at' | 'updated_at'>>) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase
    .from('website_content')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
    
  if (error) {
    console.error('Error updating website content:', error);
    throw error;
  }
  
  return data as WebsiteContent;
};

export const deleteWebsiteContent = async (id: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { error } = await supabase
    .from('website_content')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error('Error deleting website content:', error);
    throw error;
  }
  
  return true;
};