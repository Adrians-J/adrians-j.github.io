// script.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_KEY';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadData() {
  const { data, error } = await supabase.from('members').select('*');
  const container = document.getElementById('members');
  if (error) {
    container.innerText = 'Kļūda datu nolasīšanā!';
  } else {
    container.innerHTML = data.map(d => `<p>${d.name} – ${d.description}</p>`).join('');
  }
}

loadData();
