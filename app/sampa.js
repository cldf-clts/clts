/* code forked from PhonVerter by */
/* code forked from PhonVerter by */
var myar = [
  ["`&#abc;","`"],
  ["\\^1","¹"],
  ["\\^2","²"],
  ["\\^3","³"],
  ["\\^4","⁴"],
  ["\\^5","⁵"],
  ["\\^6","⁶"],
  ["\\^7","⁷"],
  ["\\^8","⁸"],
  ["\\^9","⁹"],
  ["\\^0","⁰"],
  ["_1","₁"],
  ["_2","₂"],
  ["_3","₃"],
  ["_4","₄"],
  ["_5","₅"],
  ["_6","₆"],
  ["_7","₇"],
  ["_8","₈"],
  ["_9","₉"],
  ["_0","₀"],
  ["!","↓"],
  ["!&#abc;","ǃ"],
  ["4`","ʗ"],
  ['"',"ˌ"],
  ["%","ˌ"],
  ["&","æ"],
  ["&&#abc;","ɶ"],
  ["9&#abc;","ʚ"],
  ["'","ˈ"],
  ["&#40;"," ̆"],
  ["&#40;&#abc;","&#40;"],
  ["&#41;&#abc;","&#41;"],
  [",","ˌ"],
  [",&#abc;",","],
  ["-&#abc;","‿"],
  ["._d_d","ʭ"],
  ["._w_w","ʬ"],
  ["1","ɨ"],
  ["2","ø"],
  ["3","ɜ"],
  ["3&#abc;","ɞ"],
  ["3`","ɝ"],
  ["4","ɾ"],
  ["4&#abc;","ɺ"],
  ["4&#abc;`","ⱹ"],
  ["5","ɫ"],
  ["6","ɐ"],
  ["7","ɤ"],
  ["8","ɵ"],
  ["8&#abc;","ɵ̟"],
  ["9","œ"],
  [":","ː"],
  [":&#abc;","ˑ"],
  [";","ʲ"],
  ["<&#abc;","ʢ"],
  ["<F>","↘"],
  ["<R>","↗"],
  ["_="," ̍"],
  ["="," ̩"],
  ["=&#abc;","ǂ"],
  [">&#abc;","ʡ"],
  ["\\?","ʔ"],
  ["\\?&#abc;","ʕ"],
  ["@","ə"],
  ["@&#abc;","ɘ"],
  ["@`","ɚ"],
  ["\\^","↑"],
  ["_\\}"," ̚"],
  ["&#41;","͡"],
  ["_\""," ̈"],
  ["_\\$&","ᵆ"],
  ["_\\$3","ᵌ"],
  ["_\\$6","ᵄ"],
  ["_\\$8","ᶱ"],
  ["_\\$\\?&#abc;","ˤ"],
  ["_\\$@","ᵊ"],
  ["_\\$a","ᵃ"],
  ["_\\$A","ᵅ"],
  ["_\\$b","ᵇ"],
  ["_\\$B","ᵝ"],
  ["_\\$c","ᶜ"],
  ["_\\$d","ᵈ"],
  ["_\\$D","ᶞ"],
  ["_\\$e","ᵉ"],
  ["_\\$E","ᵋ"],
  ["_\\$f","ᶠ"],
  ["_\\$G","ˠ"],
  ["_\\$g","ᵍ"],
  ["_\\$g&#abc;","ᶢ"],
  ["_\\$h","ʰ"],
  ["_\\$H","ᶣ"],
  ["_\\$h&#abc;","ʱ"],
  ["_\\$I","ᶦ"],
  ["_\\$i","ⁱ"],
  ["_\\$i&#abc;","ᶤ"],
  ["_\\$I&#abc;","ᶧ"],
  ["_\\$j","ʲ"],
  ["_\\$J","ᶮ"],
  ["_\\$J&#abc;","ᶡ"],
  ["_\\$j&#abc;","ᶨ"],
  ["_\\$k","ᵏ"],
  ["_\\$l","ˡ"],
  ["_\\$L","ᶫ"],
  ["_\\$l`","ᶩ"],
  ["_\\$m","ᵐ"],
  ["_\\$M","ᵚ"],
  ["_\\$m&#abc;","ᶭ"],
  ["_\\$N","ᵑ"],
  ["_\\$n","ⁿ"],
  ["_\\$N&#abc;","ᶰ"],
  ["_\\$n`","ᶯ"],
  ["_\\$o","ᵒ"],
  ["_\\$O","ᵓ"],
  ["_\\$p","ᵖ"],
  ["_\\$P","ᶲ"],
  ["_\\$Q","ᶛ"],
  ["_\\$r","ʳ"],
  ["_\\$R","ʶ"],
  ["_\\$r&#abc;","ʴ"],
  ["_\\$r&#abc;`","ʵ"],
  ["_\\$s","ˢ"],
  ["_\\$S","ᶴ"],
  ["_\\$s&#abc;","ᶝ"],
  ["_\\$s`","ᶳ"],
  ["_\\$t","ᵗ"],
  ["_\\$T","ᶿ"],
  ["_\\$u","ᵘ"],
  ["_\\$U","ᶷ"],
  ["_\\$u&#abc;","ᶶ"],
  ["_\\$v","ᵛ"],
  ["_\\$V","ᶺ"],
  ["_\\$v&#abc;","ᶹ"],
  ["_\\$w","ʷ"],
  ["_\\$x","ˣ"],
  ["_\\$X","ᵡ"],
  ["_\\$y","ʸ"],
  ["_\\$z","ᶻ"],
  ["_\\$Z","ᶾ"],
  ["_\\$z&#abc;","ᶽ"],
  ["_\\$z`","ᶼ"],
  ["\\+&#abc;","˖"],
  ["_\\+"," ̟"],
  ["-`","˗"],
  ["_-"," ̠"],
  ["_0"," ̊"],
  ["0"," ̥"],
  ["_>","ʼ"],
  ["_\\?","ˀ"],
  ["_\\$\\?","ˀ"],
  ["_\\?&#abc;","ˤ"],
  ["_&#abc;","_"],
  ["_^"," ̯"],
  ["_&#40;"," ̯"],
  ["_A"," ̘"],
  ["_a"," ̺"],
  ["_B"," ̏"],
  ["_B_L","ˏ"],
  ["\\$_c","˓"],
  ["_c"," ̜"],
  ["_d"," ̪"],
  ["_e"," ̴"],
  ["_F"," ̂"],
  ["_F_R","ˇ"],
  ["_G","ˠ"],
  ["_h","ʰ"],
  ["_H"," ́"],
  ["_j","ʲ"],
  ["_y","ʸ"],
  ["_;"," ̡"],
  ["_k"," ̰"],
  ["_l","ˡ"],
  ["_L"," ̀"],
  ["_L_B","ˎ"],
  ["_M"," ̄"],
  ["_m"," ̻"],
  ["_N"," ̼"],
  ["_n","ⁿ"],
  ["\\$_O","˒"],
  ["\\$_o","˕"],
  ["_o"," ̞"],
  ["_O"," ̹"],
  ["_q"," ̙"],
  ["\\$_r","˔"],
  ["_R"," ̌"],
  ["_r"," ̝"],
  ["_h&#abc;","ʱ"],
  ["_T"," ̋"],
  ["_t"," ̤"],
  ["_v"," ̬"],
  ["_w","ʷ"],
  ["_W"," ̫"],
  ["_X"," ̆"],
  ["_x"," ̽"],
  ["\\$`","˞"],
  ["`"," ̢"],
  ["_`"," ̢"],
  ["A","ɑ"],
  ["b&#abc;","ƀ"],
  ["B","β"],
  ["B&#abc;","ʙ"],
  ["b_<","ɓ"],
  ["C","ç"],
  ["C&#abc;","C"],
  ["c&#abc;","ɕ"],
  ["D","ð"],
  ["d&#abc;","ȡ"],
  ["D&#abc;","ᴆ"],
  ["d_<","ɗ"],
  ["d_b","ȸ"],
  ["d_z","ʣ"],
  ["d_Z","ʤ"],
  ["d_z&#abc;","ʥ"],
  ["d`","ɖ"],
  ["E","ɛ"],
  ["F","ɱ"],
  ["m&#abc;","ɱ"],
  ["F&#abc;","ⱱ"],
  ["f_N","ʩ"],
  ["G","ɣ"],
  ["g&#abc;","ǥ"],
  ["g&#abc;&#abc;","ɡ"],
  ["G&#abc;","ɢ"],
  ["G&#abc;_<","ʛ"],
  ["g_<","ɠ"],
  ["H","ɥ"],
  ["h&#abc;","ɦ"],
  ["H&#abc;","ʜ"],
  ["I","ɪ"],
  ["I&#abc;","ᵻ"],
  ["J","ɲ"],
  ["J&#abc;","ɟ"],
  ["j&#abc;","ʝ"],
  ["J&#abc;_<","ʄ"],
  ["K","ɬ"],
  ["K&#abc;","ɮ"],
  ["L","ʎ"],
  ["l&#abc;","ȴ"],
  ['"l&#abc;',"ɺ"],
  ["L&#abc;","ʟ"],
  ["l_e","ɫ"],
  ["l_s","ʪ"],
  ["l_z","ʫ"],
  ["l`","ɭ"],
  ["M","ɯ"],
  ["M&#abc;","ɰ"],
  ["N","ŋ"],
  ["n&#abc;","ȵ"],
  ["N&#abc;","ɴ"],
  ["n`","ɳ"],
  ["n_n","ƞ"],
  ["O","ɔ"],
  ["O&#abc;","ʘ"],
  ["P&#abc;","ʘ"],
  ["P","ɸ"],
  ["p&#abc;","ɸ"],
  ["p_<","ƥ"],
  ["Q","ɒ"],
  ["q&#abc;","ƣ"],
  ["q_<","ʠ"],
  ["q_p","ȹ"],
  ["R","ʁ"],
  ["r&#abc;","ɹ"],
  ["R&#abc;","ʀ"],
  ["r&#abc;_r","ɼ"],
  ["r&#abc;`","ɻ"],
  ["r`","ɽ"],
  ["S","ʃ"],
  ["s&#abc;","ɕ"],
  ["S_j;","ʆ"],
  ["s`","ʂ"],
  ["T","θ"],
  ["t&#abc;","ȶ"],
  ["t_<","ƭ"],
  ["t_;","ƫ"],
  ["t_s","ʦ"],
  ["t_S","ʧ"],
  ["t_s&#abc;","ʨ"],
  ["t`","ʈ"],
  ["U_w","ɷ"],
  ["u_w","ω"],
  ["U","ʊ"],
  ["u&#abc;","ʉ"],
  ["U&#abc;","ᵿ"],
  ["V","ʌ"],
  ["V&#abc;","V"],
  ["v&#abc;","ʋ"],
  ["W","ʍ"],
  ["w&#abc;","ψ"],
  ["X","χ"],
  ["X&#abc;","ħ"],
  ["x&#abc;","ɧ"],
  ["Y","ʏ"],
  ["Z","ʒ"],
  ["i_z","ɿ"],
  ["z&#abc;","ʑ"],
  ["Z_j","ʓ"],
  ["z`","ʐ"],
  ["i`","ʅ"],
  ["\\|&#abc;","ǀ"],
  ["\\|&#abc;\\|&#abc;","ǁ"],
  ["\\|\\|","‖"],
  ["~","̃"],
  ["_~"," ̨"],
  ["~&#abc;","~"],
  ["__"," ͏"],
  ['&#cde;',')'],
  ['&#def;','('],
  ['0&#abc;','◦'],
  ['&#plus;','+']
  ];

myar = myar.sort(function(x,y){return y[0].length - x[0].length;});


/* general function for conversion of sampa string to ipa */
function sampa2ipa(ipa_string)
{
  /* we need to preprocess the string in order to exclude certain
   * patterns from being replaced */

  var ipa = ipa_string;

  /* the tilde is used as nasal segment following vowels, when 
   * written in tokenized form it should not be converted to any
   * thing */
  ipa = ipa.replace(new RegExp('^\\~ ','g'),'∼ ');
  ipa = ipa.replace(new RegExp(' \\~$','g'),' ∼');
  ipa = ipa.replace(new RegExp(' \\~ ','g'),' ∼ ');

  /* brackets need to be preserved as markers for parts of words
   * which should be ignored by the analyses */
  ipa = ipa.replace(new RegExp(' \\)$','g'),'&#cde; ');
  ipa = ipa.replace(new RegExp('^\\( ','g'),'&#def; ');
  ipa = ipa.replace(new RegExp(' \\( ','g'),' &#def; ');
  ipa = ipa.replace(new RegExp(' \\) ','g'),' &#cde; ');

  /* preserve plus character */
  ipa = ipa.replace(new RegExp('^\\+ ','g'),'&#plus; ');
  ipa = ipa.replace(new RegExp(' \\+$','g'),' &#plus;');
  ipa = ipa.replace(new RegExp(' \\+ ','g'),' &#plus; ');

  /* remaining brackets and backslash are written in intermediate alphabet in order
   * to guarantee their safe replacement */
  ipa = ipa.replace(new RegExp('\\)','g'),'&#41;');
  ipa = ipa.replace(new RegExp('\\(','g'),'&#40;');
  ipa = ipa.replace(new RegExp('\\\\','g'),'&#abc;');
  var reg = '';
  	
  for(var i=0;i<myar.length;i++)
  {
    reg = new RegExp(myar[i][0], 'g');
    ipa = ipa.replace(reg,myar[i][1]);
  }
		
  return (ipa);
}

/* specific function for nice conversion of ipa stuff using autosuggest-like stuff */
function make_sampa(event, field_id, start, stop, outstart, outstop)
{
  if(event.keyCode == 32)
  {
    return;
  }
  if(typeof start == 'undefined')
  {
    start = "/x ";
  }
  if(typeof stop == 'undefined')
  {
    stop = " x/";
  }

  if(typeof outstop == 'undefined')
  {
    outstop = '';
  }
  if(typeof outstart == 'undefined')
  {
    outstart = '';
  }

  var fid = document.getElementById(field_id);
  var text = fid.value;
  var rego = new RegExp(start+".+?"+stop,"g");
  var sampas = text.match(rego);
  if(typeof sampas == null)
  {
    return;
  }
  
  var repos = [];

  for(var i=0,word;word=sampas[i];i++)
  {
    var nword = outstart + sampa2ipa(word.slice(start.length,word.length-stop.length))+outstop;
    text = text.replace(word, nword);
    repos.push(nword)
  }
  fid.value = text;
}

