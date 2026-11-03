# Bundled fonts

All fonts are self-hosted so the site makes no external font requests. Each
family is licensed under the **SIL Open Font License, Version 1.1 (OFL-1.1)**;
the full, unmodified license text for each family sits next to its font files
as `OFL.txt`. There are 520 families. Different styles of the
same family are not counted separately.

## How this set was chosen

Every file was copied byte-for-byte from the Google Fonts repository,
<https://github.com/google/fonts>, pinned to commit
`2fe1e8c6b137fb13041a7cfca6fdcd8a910ea4dc` (the `main` branch tip on 2026-11-02). Files were only renamed.
They were not modified, subset, or converted.

A family was accepted only when all of the following held:

- It lives in the `ofl/` directory of that commit, and its `METADATA.pb` says `license: "OFL"`.
- Its `OFL.txt` contains the SIL OFL 1.1 grant and a license body that matches the canonical text (whitespace-insensitive SHA-256 `0339f4642e8741dea4841c236d258f360ffbe6e2cd3d032fbd0c10d1de8f58d1`).
- Its metadata includes the `latin` subset, so the playground sample can be rendered.
- The family name uses a conservative character set and matches the name inside the font.
- Each font file is a TrueType SFNT (checked table directory, required tables, and name table). Files over 2.5 MB, and families over 5 MB, were skipped rather than fetched.
- A variable roman file was preferred. Otherwise the regular face was taken, plus bold (700) and italics when those static files exist.
- The three families already in the project (Inter, Lora, IBM Plex Mono) were kept as-is. Further families were taken in directory-name order until the catalog reached 520.

Base URL for the links below:
`https://raw.githubusercontent.com/google/fonts/2fe1e8c6b137fb13041a7cfca6fdcd8a910ea4dc/`

## Layout

| Family | Files | Styles |
| --- | --- | --- |
| Inter | `inter/italic.ttf`, `inter/regular.ttf` | Variable weights 100–900; normal and italic |
| Lora | `lora/italic.ttf`, `lora/regular.ttf` | Variable weights 400–700; normal and italic |
| IBM Plex Mono | `ibm-plex-mono/bold-italic.ttf`, `ibm-plex-mono/bold.ttf`, `ibm-plex-mono/italic.ttf`, `ibm-plex-mono/regular.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| ABeeZee | `abeezee/regular.ttf`, `abeezee/italic.ttf` | Static weight 400 (regular); normal and italic |
| Abel | `abel/regular.ttf` | Static weight 400 (regular); normal |
| Abhaya Libre | `abhayalibre/regular.ttf`, `abhayalibre/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Aboreto | `aboreto/regular.ttf` | Static weight 400 (regular); normal |
| Adamina | `adamina/regular.ttf` | Static weight 400 (regular); normal |
| ADLaM Display | `adlamdisplay/regular.ttf` | Static weight 400 (regular); normal |
| Advent Pro | `adventpro/regular.ttf`, `adventpro/italic.ttf` | Variable weights 100–900; normal and italic |
| Afacad | `afacad/regular.ttf`, `afacad/italic.ttf` | Variable weights 400–700; normal and italic |
| Afacad Flux | `afacadflux/regular.ttf` | Variable weights 100–1000; normal |
| Agbalumo | `agbalumo/regular.ttf` | Static weight 400 (regular); normal |
| Agdasima | `agdasima/regular.ttf`, `agdasima/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Agrave Pro | `agravepro/regular.ttf` | Variable weights 100–700; normal |
| Agu Display | `agudisplay/regular.ttf` | Static weight 400 (regular); normal |
| Akaya Kanadaka | `akayakanadaka/regular.ttf` | Static weight 400 (regular); normal |
| Akaya Telivigala | `akayatelivigala/regular.ttf` | Static weight 400 (regular); normal |
| Akronim | `akronim/regular.ttf` | Static weight 400 (regular); normal |
| Akshar | `akshar/regular.ttf` | Variable weights 300–700; normal |
| Akt | `akt/regular.ttf` | Variable weights 100–900; normal |
| Alan Sans | `alansans/regular.ttf` | Variable weights 300–900; normal |
| Alata | `alata/regular.ttf` | Static weight 400 (regular); normal |
| Alatsi | `alatsi/regular.ttf` | Static weight 400 (regular); normal |
| Albert Sans | `albertsans/regular.ttf`, `albertsans/italic.ttf` | Variable weights 100–900; normal and italic |
| Aldrich | `aldrich/regular.ttf` | Static weight 400 (regular); normal |
| Alegreya | `alegreya/regular.ttf`, `alegreya/italic.ttf` | Variable weights 400–900; normal and italic |
| Alegreya Sans | `alegreyasans/regular.ttf`, `alegreyasans/bold.ttf`, `alegreyasans/italic.ttf`, `alegreyasans/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Alegreya Sans SC | `alegreyasanssc/regular.ttf`, `alegreyasanssc/bold.ttf`, `alegreyasanssc/italic.ttf`, `alegreyasanssc/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Alegreya SC | `alegreyasc/regular.ttf`, `alegreyasc/bold.ttf`, `alegreyasc/italic.ttf`, `alegreyasc/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Aleo | `aleo/regular.ttf`, `aleo/italic.ttf` | Variable weights 100–900; normal and italic |
| Alex Brush | `alexbrush/regular.ttf` | Static weight 400 (regular); normal |
| Alexandria | `alexandria/regular.ttf` | Variable weights 100–900; normal |
| Alfa Slab One | `alfaslabone/regular.ttf` | Static weight 400 (regular); normal |
| Alice | `alice/regular.ttf` | Static weight 400 (regular); normal |
| Alien Block | `alienblock/regular.ttf` | Static weight 400 (regular); normal |
| Alike | `alike/regular.ttf` | Static weight 400 (regular); normal |
| Alike Angular | `alikeangular/regular.ttf` | Static weight 400 (regular); normal |
| Alkatra | `alkatra/regular.ttf` | Variable weights 400–700; normal |
| Allan | `allan/regular.ttf`, `allan/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Allison | `allison/regular.ttf` | Static weight 400 (regular); normal |
| Allura | `allura/regular.ttf` | Static weight 400 (regular); normal |
| Almarai | `almarai/regular.ttf`, `almarai/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Almendra | `almendra/regular.ttf`, `almendra/bold.ttf`, `almendra/italic.ttf`, `almendra/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Almendra Display | `almendradisplay/regular.ttf` | Static weight 400 (regular); normal |
| Almendra SC | `almendrasc/regular.ttf` | Static weight 400 (regular); normal |
| Alumni Sans | `alumnisans/regular.ttf`, `alumnisans/italic.ttf` | Variable weights 100–900; normal and italic |
| Alumni Sans Collegiate One | `alumnisanscollegiateone/regular.ttf`, `alumnisanscollegiateone/italic.ttf` | Static weight 400 (regular); normal and italic |
| Alumni Sans Collegiate One SC | `alumnisanscollegiateonesc/regular.ttf`, `alumnisanscollegiateonesc/italic.ttf` | Static weight 400 (regular); normal and italic |
| Alumni Sans Inline One | `alumnisansinlineone/regular.ttf`, `alumnisansinlineone/italic.ttf` | Static weight 400 (regular); normal and italic |
| Alumni Sans Pinstripe | `alumnisanspinstripe/regular.ttf`, `alumnisanspinstripe/italic.ttf` | Static weight 400 (regular); normal and italic |
| Alumni Sans SC | `alumnisanssc/regular.ttf`, `alumnisanssc/italic.ttf` | Variable weights 100–900; normal and italic |
| Alyamama | `alyamama/regular.ttf` | Variable weights 300–900; normal |
| Amarante | `amarante/regular.ttf` | Static weight 400 (regular); normal |
| Amaranth | `amaranth/regular.ttf`, `amaranth/bold.ttf`, `amaranth/italic.ttf`, `amaranth/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Amarna | `amarna/regular.ttf`, `amarna/italic.ttf` | Variable weights 100–700; normal and italic |
| Amatic SC | `amaticsc/regular.ttf`, `amaticsc/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Amiko | `amiko/regular.ttf`, `amiko/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Amiri | `amiri/regular.ttf`, `amiri/bold.ttf`, `amiri/italic.ttf`, `amiri/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Amiri Quran | `amiriquran/regular.ttf` | Static weight 400 (regular); normal |
| Amita | `amita/regular.ttf`, `amita/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Anaheim | `anaheim/regular.ttf` | Variable weights 400–800; normal |
| Ancizar Sans | `ancizarsans/regular.ttf`, `ancizarsans/italic.ttf` | Variable weights 100–1000; normal and italic |
| Ancizar Serif | `ancizarserif/regular.ttf`, `ancizarserif/italic.ttf` | Variable weights 300–900; normal and italic |
| Andada Pro | `andadapro/regular.ttf`, `andadapro/italic.ttf` | Variable weights 400–840; normal and italic |
| Anek Bangla | `anekbangla/regular.ttf` | Variable weights 100–800; normal |
| Anek Devanagari | `anekdevanagari/regular.ttf` | Variable weights 100–800; normal |
| Anek Gujarati | `anekgujarati/regular.ttf` | Variable weights 100–800; normal |
| Anek Gurmukhi | `anekgurmukhi/regular.ttf` | Variable weights 100–800; normal |
| Anek Kannada | `anekkannada/regular.ttf` | Variable weights 100–800; normal |
| Anek Latin | `aneklatin/regular.ttf` | Variable weights 100–800; normal |
| Anek Malayalam | `anekmalayalam/regular.ttf` | Variable weights 100–800; normal |
| Anek Odia | `anekodia/regular.ttf` | Variable weights 100–800; normal |
| Anek Tamil | `anektamil/regular.ttf` | Variable weights 100–800; normal |
| Anek Telugu | `anektelugu/regular.ttf` | Variable weights 100–800; normal |
| Angkor | `angkor/regular.ttf` | Static weight 400 (regular); normal |
| Annie Use Your Telescope | `annieuseyourtelescope/regular.ttf` | Static weight 400 (regular); normal |
| Anta | `anta/regular.ttf` | Static weight 400 (regular); normal |
| Antic Didone | `anticdidone/regular.ttf` | Static weight 400 (regular); normal |
| Antic Slab | `anticslab/regular.ttf` | Static weight 400 (regular); normal |
| Anton | `anton/regular.ttf` | Static weight 400 (regular); normal |
| Anton SC | `antonsc/regular.ttf` | Static weight 400 (regular); normal |
| Antonio | `antonio/regular.ttf` | Variable weights 100–700; normal |
| Anuphan | `anuphan/regular.ttf` | Variable weights 100–700; normal |
| Anybody | `anybody/regular.ttf`, `anybody/italic.ttf` | Variable weights 100–900; normal and italic |
| Aoboshi One | `aoboshione/regular.ttf` | Static weight 400 (regular); normal |
| AR One Sans | `aronesans/regular.ttf` | Variable weights 400–700; normal |
| Architects Daughter | `architectsdaughter/regular.ttf` | Static weight 400 (regular); normal |
| Archivo | `archivo/regular.ttf`, `archivo/italic.ttf` | Variable weights 100–900; normal and italic |
| Archivo Black | `archivoblack/regular.ttf` | Static weight 400 (regular); normal |
| Archivo Narrow | `archivonarrow/regular.ttf`, `archivonarrow/italic.ttf` | Variable weights 400–700; normal and italic |
| Are You Serious | `areyouserious/regular.ttf` | Static weight 400 (regular); normal |
| Arima | `arima/regular.ttf` | Variable weights 100–700; normal |
| Arimo | `arimo/regular.ttf`, `arimo/italic.ttf` | Variable weights 400–700; normal and italic |
| Arizonia | `arizonia/regular.ttf` | Static weight 400 (regular); normal |
| Arsenal | `arsenal/regular.ttf`, `arsenal/bold.ttf`, `arsenal/italic.ttf`, `arsenal/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Arsenal SC | `arsenalsc/regular.ttf`, `arsenalsc/bold.ttf`, `arsenalsc/italic.ttf`, `arsenalsc/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Artifika | `artifika/regular.ttf` | Static weight 400 (regular); normal |
| Arya | `arya/regular.ttf`, `arya/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Asap | `asap/regular.ttf`, `asap/italic.ttf` | Variable weights 100–900; normal and italic |
| Asap Condensed | `asapcondensed/regular.ttf`, `asapcondensed/bold.ttf`, `asapcondensed/italic.ttf`, `asapcondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Asap Sharp | `asapsharp/regular.ttf`, `asapsharp/italic.ttf` | Variable weights 100–900; normal and italic |
| Asar | `asar/regular.ttf` | Static weight 400 (regular); normal |
| Asimovian | `asimovian/regular.ttf` | Static weight 400 (regular); normal |
| Asset | `asset/regular.ttf` | Static weight 400 (regular); normal |
| Astloch | `astloch/regular.ttf`, `astloch/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Athiti | `athiti/regular.ttf`, `athiti/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Atkinson Hyperlegible | `atkinsonhyperlegible/regular.ttf`, `atkinsonhyperlegible/bold.ttf`, `atkinsonhyperlegible/italic.ttf`, `atkinsonhyperlegible/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Atkinson Hyperlegible Mono | `atkinsonhyperlegiblemono/regular.ttf`, `atkinsonhyperlegiblemono/italic.ttf` | Variable weights 200–800; normal and italic |
| Atkinson Hyperlegible Next | `atkinsonhyperlegiblenext/regular.ttf`, `atkinsonhyperlegiblenext/italic.ttf` | Variable weights 200–800; normal and italic |
| Atma | `atma/regular.ttf`, `atma/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Atomic Age | `atomicage/regular.ttf` | Static weight 400 (regular); normal |
| Aubrey | `aubrey/regular.ttf` | Static weight 400 (regular); normal |
| Audiowide | `audiowide/regular.ttf` | Static weight 400 (regular); normal |
| Autour One | `autourone/regular.ttf` | Static weight 400 (regular); normal |
| Average | `average/regular.ttf` | Static weight 400 (regular); normal |
| Average Sans | `averagesans/regular.ttf` | Static weight 400 (regular); normal |
| Azeret Mono | `azeretmono/regular.ttf`, `azeretmono/italic.ttf` | Variable weights 100–900; normal and italic |
| B612 | `b612/regular.ttf`, `b612/bold.ttf`, `b612/italic.ttf`, `b612/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| B612 Mono | `b612mono/regular.ttf`, `b612mono/bold.ttf`, `b612mono/italic.ttf`, `b612mono/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Babylonica | `babylonica/regular.ttf` | Static weight 400 (regular); normal |
| Bacasime Antique | `bacasimeantique/regular.ttf` | Static weight 400 (regular); normal |
| Bad Script | `badscript/regular.ttf` | Static weight 400 (regular); normal |
| Badeen Display | `badeendisplay/regular.ttf` | Static weight 400 (regular); normal |
| Bagel Fat One | `bagelfatone/regular.ttf` | Static weight 400 (regular); normal |
| Bahiana | `bahiana/regular.ttf` | Static weight 400 (regular); normal |
| Bahianita | `bahianita/regular.ttf` | Static weight 400 (regular); normal |
| Bai Jamjuree | `baijamjuree/regular.ttf`, `baijamjuree/bold.ttf`, `baijamjuree/italic.ttf`, `baijamjuree/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Bakbak One | `bakbakone/regular.ttf` | Static weight 400 (regular); normal |
| Ballet | `ballet/regular.ttf` | Static weight 400 (regular); normal |
| Baloo 2 | `baloo2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Bhai 2 | `baloobhai2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Bhaijaan 2 | `baloobhaijaan2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Bhaina 2 | `baloobhaina2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Chettan 2 | `baloochettan2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Da 2 | `balooda2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Paaji 2 | `baloopaaji2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Tamma 2 | `balootamma2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Tammudu 2 | `balootammudu2/regular.ttf` | Variable weights 400–800; normal |
| Baloo Thambi 2 | `baloothambi2/regular.ttf` | Variable weights 400–800; normal |
| Balsamiq Sans | `balsamiqsans/regular.ttf`, `balsamiqsans/bold.ttf`, `balsamiqsans/italic.ttf`, `balsamiqsans/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Bangers | `bangers/regular.ttf` | Static weight 400 (regular); normal |
| Barlow | `barlow/regular.ttf`, `barlow/bold.ttf`, `barlow/italic.ttf`, `barlow/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Barlow Condensed | `barlowcondensed/regular.ttf`, `barlowcondensed/bold.ttf`, `barlowcondensed/italic.ttf`, `barlowcondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Barlow Semi Condensed | `barlowsemicondensed/regular.ttf`, `barlowsemicondensed/bold.ttf`, `barlowsemicondensed/italic.ttf`, `barlowsemicondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Barriecito | `barriecito/regular.ttf` | Static weight 400 (regular); normal |
| Barrio | `barrio/regular.ttf` | Static weight 400 (regular); normal |
| Baskervville | `baskervville/regular.ttf`, `baskervville/italic.ttf` | Variable weights 400–700; normal and italic |
| Baskervville SC | `baskervvillesc/regular.ttf` | Variable weights 400–700; normal |
| Battambang | `battambang/regular.ttf`, `battambang/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Bayon | `bayon/regular.ttf` | Static weight 400 (regular); normal |
| BBH Bartle | `bbhbartle/regular.ttf` | Static weight 400 (regular); normal |
| BBH Bogle | `bbhbogle/regular.ttf` | Static weight 400 (regular); normal |
| BBH Hegarty | `bbhhegarty/regular.ttf` | Static weight 400 (regular); normal |
| Be Vietnam Pro | `bevietnampro/regular.ttf`, `bevietnampro/bold.ttf`, `bevietnampro/italic.ttf`, `bevietnampro/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Beau Rivage | `beaurivage/regular.ttf` | Static weight 400 (regular); normal |
| Bebas Neue | `bebasneue/regular.ttf` | Static weight 400 (regular); normal |
| Beiruti | `beiruti/regular.ttf` | Variable weights 200–900; normal |
| Belanosima | `belanosima/regular.ttf`, `belanosima/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Bellefair | `bellefair/regular.ttf` | Static weight 400 (regular); normal |
| Belleza | `belleza/regular.ttf` | Static weight 400 (regular); normal |
| Bellota | `bellota/regular.ttf`, `bellota/bold.ttf`, `bellota/italic.ttf`, `bellota/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Bellota Text | `bellotatext/regular.ttf`, `bellotatext/bold.ttf`, `bellotatext/italic.ttf`, `bellotatext/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| BenchNine | `benchnine/regular.ttf`, `benchnine/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Benne | `benne/regular.ttf` | Static weight 400 (regular); normal |
| Berkshire Swash | `berkshireswash/regular.ttf` | Static weight 400 (regular); normal |
| Besley | `besley/regular.ttf`, `besley/italic.ttf` | Variable weights 400–900; normal and italic |
| Betania Patmos | `betaniapatmos/regular.ttf` | Static weight 400 (regular); normal |
| Betania Patmos GDL | `betaniapatmosgdl/regular.ttf` | Static weight 400 (regular); normal |
| Betania Patmos In | `betaniapatmosin/regular.ttf` | Static weight 400 (regular); normal |
| Betania Patmos In GDL | `betaniapatmosingdl/regular.ttf` | Static weight 400 (regular); normal |
| Beth Ellen | `bethellen/regular.ttf` | Static weight 400 (regular); normal |
| Bevan | `bevan/regular.ttf`, `bevan/italic.ttf` | Static weight 400 (regular); normal and italic |
| BhuTuka Expanded One | `bhutukaexpandedone/regular.ttf` | Static weight 400 (regular); normal |
| Big Shoulders | `bigshoulders/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Display | `bigshouldersdisplay/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Display SC | `bigshouldersdisplaysc/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Inline | `bigshouldersinline/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Inline Display | `bigshouldersinlinedisplay/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Inline Display SC | `bigshouldersinlinedisplaysc/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Inline Text | `bigshouldersinlinetext/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Inline Text SC | `bigshouldersinlinetextsc/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Stencil | `bigshouldersstencil/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Stencil Display | `bigshouldersstencildisplay/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Stencil Display SC | `bigshouldersstencildisplaysc/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Stencil Text | `bigshouldersstenciltext/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Stencil Text SC | `bigshouldersstenciltextsc/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Text | `bigshoulderstext/regular.ttf` | Variable weights 100–900; normal |
| Big Shoulders Text SC | `bigshoulderstextsc/regular.ttf` | Variable weights 100–900; normal |
| Bigelow Rules | `bigelowrules/regular.ttf` | Static weight 400 (regular); normal |
| Bilbo | `bilbo/regular.ttf` | Static weight 400 (regular); normal |
| BioRhyme | `biorhyme/regular.ttf` | Variable weights 200–800; normal |
| BioRhyme Expanded | `biorhymeexpanded/regular.ttf`, `biorhymeexpanded/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Birthstone | `birthstone/regular.ttf` | Static weight 400 (regular); normal |
| Birthstone Bounce | `birthstonebounce/regular.ttf` | Static weight 400 (regular); normal |
| Biryani | `biryani/regular.ttf`, `biryani/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Bitcount | `bitcount/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Grid Double | `bitcountgriddouble/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Grid Double Ink | `bitcountgriddoubleink/regular.ttf` | Static weight 400 (regular); normal |
| Bitcount Grid Single | `bitcountgridsingle/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Grid Single Ink | `bitcountgridsingleink/regular.ttf` | Static weight 400 (regular); normal |
| Bitcount Ink | `bitcountink/regular.ttf` | Static weight 400 (regular); normal |
| Bitcount Prop Double | `bitcountpropdouble/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Prop Double Ink | `bitcountpropdoubleink/regular.ttf` | Static weight 400 (regular); normal |
| Bitcount Prop Single | `bitcountpropsingle/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Prop Single Ink | `bitcountpropsingleink/regular.ttf` | Static weight 400 (regular); normal |
| Bitcount Single | `bitcountsingle/regular.ttf` | Variable weights 100–900; normal |
| Bitcount Single Ink | `bitcountsingleink/regular.ttf` | Static weight 400 (regular); normal |
| Black Han Sans | `blackhansans/regular.ttf` | Static weight 400 (regular); normal |
| Black Ops One | `blackopsone/regular.ttf` | Static weight 400 (regular); normal |
| Blaka | `blaka/regular.ttf` | Static weight 400 (regular); normal |
| Blaka Hollow | `blakahollow/regular.ttf` | Static weight 400 (regular); normal |
| Blaka Ink | `blakaink/regular.ttf` | Static weight 400 (regular); normal |
| Blinker | `blinker/regular.ttf`, `blinker/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Bodoni Moda | `bodonimoda/regular.ttf`, `bodonimoda/italic.ttf` | Variable weights 400–900; normal and italic |
| Bodoni Moda SC | `bodonimodasc/regular.ttf`, `bodonimodasc/italic.ttf` | Variable weights 400–900; normal and italic |
| Bokor | `bokor/regular.ttf` | Static weight 400 (regular); normal |
| Boldonse | `boldonse/regular.ttf` | Static weight 400 (regular); normal |
| Bona Nova | `bonanova/regular.ttf`, `bonanova/bold.ttf`, `bonanova/italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Bona Nova SC | `bonanovasc/regular.ttf`, `bonanovasc/bold.ttf`, `bonanovasc/italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Bonheur Royale | `bonheurroyale/regular.ttf` | Static weight 400 (regular); normal |
| Borel | `borel/regular.ttf` | Static weight 400 (regular); normal |
| Braah One | `braahone/regular.ttf` | Static weight 400 (regular); normal |
| Brawler | `brawler/regular.ttf`, `brawler/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Bricolage Grotesque | `bricolagegrotesque/regular.ttf` | Variable weights 200–800; normal |
| Briem Hand | `briemhand/regular.ttf` | Variable weights 100–900; normal |
| Bruno Ace | `brunoace/regular.ttf` | Static weight 400 (regular); normal |
| Bruno Ace SC | `brunoacesc/regular.ttf` | Static weight 400 (regular); normal |
| Brygada 1918 | `brygada1918/regular.ttf`, `brygada1918/italic.ttf` | Variable weights 400–700; normal and italic |
| Buenard | `buenard/regular.ttf` | Variable weights 400–700; normal |
| Bungee | `bungee/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Color | `bungeecolor/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Hairline | `bungeehairline/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Inline | `bungeeinline/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Outline | `bungeeoutline/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Shade | `bungeeshade/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Spice | `bungeespice/regular.ttf` | Static weight 400 (regular); normal |
| Bungee Tint | `bungeetint/regular.ttf` | Static weight 400 (regular); normal |
| Bytesized | `bytesized/regular.ttf` | Static weight 400 (regular); normal |
| Caacupe One | `caacupeone/regular.ttf` | Static weight 400 (regular); normal |
| Cabin | `cabin/regular.ttf`, `cabin/italic.ttf` | Variable weights 400–700; normal and italic |
| Cabin Condensed | `cabincondensed/regular.ttf`, `cabincondensed/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cabin Sketch | `cabinsketch/regular.ttf`, `cabinsketch/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cagliostro | `cagliostro/regular.ttf` | Static weight 400 (regular); normal |
| Cairo | `cairo/regular.ttf` | Variable weights 200–1000; normal |
| Cairo Play | `cairoplay/regular.ttf` | Variable weights 200–1000; normal |
| Cal Sans | `calsans/regular.ttf` | Static weight 400 (regular); normal |
| Caladea | `caladea/regular.ttf`, `caladea/bold.ttf`, `caladea/italic.ttf`, `caladea/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Calistoga | `calistoga/regular.ttf` | Static weight 400 (regular); normal |
| Cambay | `cambay/regular.ttf`, `cambay/bold.ttf`, `cambay/italic.ttf`, `cambay/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Cantarell | `cantarell/regular.ttf`, `cantarell/bold.ttf`, `cantarell/italic.ttf`, `cantarell/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Caprasimo | `caprasimo/regular.ttf` | Static weight 400 (regular); normal |
| Capriola | `capriola/regular.ttf` | Variable weights 300–700; normal |
| Caramel | `caramel/regular.ttf` | Static weight 400 (regular); normal |
| Carattere | `carattere/regular.ttf` | Static weight 400 (regular); normal |
| Cardo | `cardo/regular.ttf`, `cardo/bold.ttf`, `cardo/italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Carlito | `carlito/regular.ttf`, `carlito/bold.ttf`, `carlito/italic.ttf`, `carlito/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Carrois Gothic | `carroisgothic/regular.ttf` | Static weight 400 (regular); normal |
| Carrois Gothic SC | `carroisgothicsc/regular.ttf` | Static weight 400 (regular); normal |
| Castoro | `castoro/regular.ttf`, `castoro/italic.ttf` | Variable weights 400–700; normal and italic |
| Castoro Titling | `castorotitling/regular.ttf` | Static weight 400 (regular); normal |
| Catamaran | `catamaran/regular.ttf` | Variable weights 100–900; normal |
| Cause | `cause/regular.ttf` | Variable weights 100–900; normal |
| Caveat | `caveat/regular.ttf` | Variable weights 400–700; normal |
| Caveat Brush | `caveatbrush/regular.ttf` | Static weight 400 (regular); normal |
| Cedarville Cursive | `cedarvillecursive/regular.ttf` | Static weight 400 (regular); normal |
| Chakra Petch | `chakrapetch/regular.ttf`, `chakrapetch/bold.ttf`, `chakrapetch/italic.ttf`, `chakrapetch/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Changa | `changa/regular.ttf` | Variable weights 200–800; normal |
| Chango | `chango/regular.ttf` | Static weight 400 (regular); normal |
| Charm | `charm/regular.ttf`, `charm/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Charmonman | `charmonman/regular.ttf`, `charmonman/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Chathura | `chathura/regular.ttf`, `chathura/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Chau Philomene One | `chauphilomeneone/regular.ttf`, `chauphilomeneone/italic.ttf` | Static weight 400 (regular); normal and italic |
| Chela One | `chelaone/regular.ttf` | Static weight 400 (regular); normal |
| Cherish | `cherish/regular.ttf` | Static weight 400 (regular); normal |
| Cherry Bomb One | `cherrybombone/regular.ttf` | Static weight 400 (regular); normal |
| Cherry Swash | `cherryswash/regular.ttf`, `cherryswash/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Chilanka | `chilanka/regular.ttf` | Static weight 400 (regular); normal |
| Chivo | `chivo/regular.ttf`, `chivo/italic.ttf` | Variable weights 100–900; normal and italic |
| Chivo Mono | `chivomono/regular.ttf`, `chivomono/italic.ttf` | Variable weights 100–900; normal and italic |
| Chokokutai | `chokokutai/regular.ttf` | Static weight 400 (regular); normal |
| Chonburi | `chonburi/regular.ttf` | Static weight 400 (regular); normal |
| Cinzel | `cinzel/regular.ttf` | Variable weights 400–900; normal |
| Cinzel Decorative | `cinzeldecorative/regular.ttf`, `cinzeldecorative/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Clarity City | `claritycity/regular.ttf`, `claritycity/italic.ttf` | Variable weights 100–900; normal and italic |
| Clicker Script | `clickerscript/regular.ttf` | Static weight 400 (regular); normal |
| Coiny | `coiny/regular.ttf` | Static weight 400 (regular); normal |
| Combo | `combo/regular.ttf` | Static weight 400 (regular); normal |
| Comfortaa | `comfortaa/regular.ttf` | Variable weights 300–700; normal |
| Comforter | `comforter/regular.ttf` | Static weight 400 (regular); normal |
| Comforter Brush | `comforterbrush/regular.ttf` | Static weight 400 (regular); normal |
| Comic Neue | `comicneue/regular.ttf`, `comicneue/bold.ttf`, `comicneue/italic.ttf`, `comicneue/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Comic Relief | `comicrelief/regular.ttf`, `comicrelief/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Comme | `comme/regular.ttf` | Variable weights 100–900; normal |
| Commissioner | `commissioner/regular.ttf` | Variable weights 100–900; normal |
| Coral Pixels | `coralpixels/regular.ttf` | Static weight 400 (regular); normal |
| Corinthia | `corinthia/regular.ttf`, `corinthia/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cormorant | `cormorant/regular.ttf`, `cormorant/italic.ttf` | Variable weights 300–700; normal and italic |
| Cormorant Garamond | `cormorantgaramond/regular.ttf`, `cormorantgaramond/italic.ttf` | Variable weights 300–700; normal and italic |
| Cormorant Infant | `cormorantinfant/regular.ttf`, `cormorantinfant/italic.ttf` | Variable weights 300–700; normal and italic |
| Cormorant SC | `cormorantsc/regular.ttf`, `cormorantsc/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cormorant Unicase | `cormorantunicase/regular.ttf`, `cormorantunicase/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cormorant Upright | `cormorantupright/regular.ttf`, `cormorantupright/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cossette Texte | `cossettetexte/regular.ttf`, `cossettetexte/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Cossette Titre | `cossettetitre/regular.ttf`, `cossettetitre/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Courgette | `courgette/regular.ttf` | Static weight 400 (regular); normal |
| Courier Prime | `courierprime/regular.ttf`, `courierprime/bold.ttf`, `courierprime/italic.ttf`, `courierprime/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Cousine | `cousine/regular.ttf`, `cousine/bold.ttf`, `cousine/italic.ttf`, `cousine/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Coustard | `coustard/regular.ttf` | Static weight 400 (regular); normal |
| Covered By Your Grace | `coveredbyyourgrace/regular.ttf` | Static weight 400 (regular); normal |
| Crimson Pro | `crimsonpro/regular.ttf`, `crimsonpro/italic.ttf` | Variable weights 200–900; normal and italic |
| Crimson Text | `crimsontext/regular.ttf`, `crimsontext/bold.ttf`, `crimsontext/italic.ttf`, `crimsontext/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Croissant One | `croissantone/regular.ttf` | Static weight 400 (regular); normal |
| Cuprum | `cuprum/regular.ttf`, `cuprum/italic.ttf` | Variable weights 400–700; normal and italic |
| Cute Font | `cutefont/regular.ttf` | Static weight 400 (regular); normal |
| Cutive | `cutive/regular.ttf` | Static weight 400 (regular); normal |
| Cutive Mono | `cutivemono/regular.ttf` | Static weight 400 (regular); normal |
| Damion | `damion/regular.ttf` | Static weight 400 (regular); normal |
| Dancing Script | `dancingscript/regular.ttf` | Variable weights 400–700; normal |
| Danfo | `danfo/regular.ttf` | Static weight 400 (regular); normal |
| Dangrek | `dangrek/regular.ttf` | Static weight 400 (regular); normal |
| Darker Grotesque | `darkergrotesque/regular.ttf` | Variable weights 300–900; normal |
| Darumadrop One | `darumadropone/regular.ttf` | Static weight 400 (regular); normal |
| David Libre | `davidlibre/regular.ttf`, `davidlibre/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Dekko | `dekko/regular.ttf` | Static weight 400 (regular); normal |
| Delicious Handrawn | `delicioushandrawn/regular.ttf` | Static weight 400 (regular); normal |
| Denk One | `denkone/regular.ttf` | Static weight 400 (regular); normal |
| Dhurjati | `dhurjati/regular.ttf` | Static weight 400 (regular); normal |
| Dhyana | `dhyana/regular.ttf`, `dhyana/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Digital Numbers | `digitalnumbers/regular.ttf` | Static weight 400 (regular); normal |
| Diphylleia | `diphylleia/regular.ttf` | Static weight 400 (regular); normal |
| Diplomata | `diplomata/regular.ttf` | Static weight 400 (regular); normal |
| Diplomata SC | `diplomatasc/regular.ttf` | Static weight 400 (regular); normal |
| DM Mono | `dmmono/regular.ttf`, `dmmono/italic.ttf` | Static weight 400 (regular); normal and italic |
| DM Sans | `dmsans/regular.ttf`, `dmsans/italic.ttf` | Variable weights 100–1000; normal and italic |
| DM Serif Display | `dmserifdisplay/regular.ttf`, `dmserifdisplay/italic.ttf` | Static weight 400 (regular); normal and italic |
| DM Serif Text | `dmseriftext/regular.ttf`, `dmseriftext/italic.ttf` | Static weight 400 (regular); normal and italic |
| Do Hyeon | `dohyeon/regular.ttf` | Static weight 400 (regular); normal |
| Dokdo | `dokdo/regular.ttf` | Static weight 400 (regular); normal |
| Domine | `domine/regular.ttf` | Variable weights 400–700; normal |
| Dosis | `dosis/regular.ttf` | Variable weights 200–800; normal |
| DotGothic16 | `dotgothic16/regular.ttf` | Static weight 400 (regular); normal |
| Doto | `doto/regular.ttf` | Variable weights 100–900; normal |
| Eagle Lake | `eaglelake/regular.ttf` | Static weight 400 (regular); normal |
| EB Garamond | `ebgaramond/regular.ttf`, `ebgaramond/italic.ttf` | Variable weights 400–800; normal and italic |
| Eczar | `eczar/regular.ttf` | Variable weights 400–800; normal |
| Edu AU VIC WA NT Arrows | `eduauvicwantarrows/regular.ttf` | Variable weights 400–700; normal |
| Edu AU VIC WA NT Dots | `eduauvicwantdots/regular.ttf` | Variable weights 400–700; normal |
| Edu AU VIC WA NT Guides | `eduauvicwantguides/regular.ttf` | Variable weights 400–700; normal |
| Edu AU VIC WA NT Hand | `eduauvicwanthand/regular.ttf` | Variable weights 400–700; normal |
| Edu AU VIC WA NT Pre | `eduauvicwantpre/regular.ttf` | Variable weights 400–700; normal |
| Edu NSW ACT Foundation | `edunswactfoundation/regular.ttf` | Variable weights 400–700; normal |
| Edu QLD Beginner | `eduqldbeginner/regular.ttf` | Variable weights 400–700; normal |
| Edu SA Beginner | `edusabeginner/regular.ttf` | Variable weights 400–700; normal |
| Edu TAS Beginner | `edutasbeginner/regular.ttf` | Variable weights 400–700; normal |
| Edu VIC WA NT Beginner | `eduvicwantbeginner/regular.ttf` | Variable weights 400–700; normal |
| Ek Mukta | `ekmukta/regular.ttf`, `ekmukta/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| El Messiri | `elmessiri/regular.ttf` | Variable weights 400–700; normal |
| Elms Sans | `elmssans/regular.ttf`, `elmssans/italic.ttf` | Variable weights 100–900; normal and italic |
| Elsie | `elsie/regular.ttf` | Static weight 400 (regular); normal |
| Elsie Swash Caps | `elsieswashcaps/regular.ttf` | Static weight 400 (regular); normal |
| Encode Sans | `encodesans/regular.ttf` | Variable weights 100–900; normal |
| Encode Sans Condensed | `encodesanscondensed/regular.ttf`, `encodesanscondensed/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Encode Sans Expanded | `encodesansexpanded/regular.ttf`, `encodesansexpanded/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Encode Sans SC | `encodesanssc/regular.ttf` | Variable weights 100–900; normal |
| Encode Sans Semi Condensed | `encodesanssemicondensed/regular.ttf`, `encodesanssemicondensed/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Encode Sans Semi Expanded | `encodesanssemiexpanded/regular.ttf`, `encodesanssemiexpanded/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Englebert | `englebert/regular.ttf` | Static weight 400 (regular); normal |
| Ephesis | `ephesis/regular.ttf` | Static weight 400 (regular); normal |
| Epilogue | `epilogue/regular.ttf`, `epilogue/italic.ttf` | Variable weights 100–900; normal and italic |
| Epunda Sans | `epundasans/regular.ttf`, `epundasans/italic.ttf` | Variable weights 300–900; normal and italic |
| Epunda Slab | `epundaslab/regular.ttf`, `epundaslab/italic.ttf` | Variable weights 300–900; normal and italic |
| Estedad | `estedad/regular.ttf` | Variable weights 100–900; normal |
| Estonia | `estonia/regular.ttf` | Static weight 400 (regular); normal |
| Exo | `exo/regular.ttf`, `exo/italic.ttf` | Variable weights 100–900; normal and italic |
| Exo 2 | `exo2/regular.ttf`, `exo2/italic.ttf` | Variable weights 100–900; normal and italic |
| Expletus Sans | `expletussans/regular.ttf`, `expletussans/italic.ttf` | Variable weights 400–700; normal and italic |
| Explora | `explora/regular.ttf` | Static weight 400 (regular); normal |
| Faculty Glyphic | `facultyglyphic/regular.ttf` | Static weight 400 (regular); normal |
| Fahkwang | `fahkwang/regular.ttf`, `fahkwang/bold.ttf`, `fahkwang/italic.ttf`, `fahkwang/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Familjen Grotesk | `familjengrotesk/regular.ttf`, `familjengrotesk/italic.ttf` | Variable weights 400–700; normal and italic |
| Fanwood Text | `fanwoodtext/regular.ttf`, `fanwoodtext/italic.ttf` | Static weight 400 (regular); normal and italic |
| Farro | `farro/regular.ttf`, `farro/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Farsan | `farsan/regular.ttf` | Static weight 400 (regular); normal |
| Faster One | `fasterone/regular.ttf` | Static weight 400 (regular); normal |
| Fasthand | `fasthand/regular.ttf` | Static weight 400 (regular); normal |
| Fauna One | `faunaone/regular.ttf` | Static weight 400 (regular); normal |
| Faustina | `faustina/regular.ttf`, `faustina/italic.ttf` | Variable weights 300–800; normal and italic |
| Federant | `federant/regular.ttf` | Static weight 400 (regular); normal |
| Felipa | `felipa/regular.ttf` | Static weight 400 (regular); normal |
| Fenix | `fenix/regular.ttf` | Static weight 400 (regular); normal |
| Festive | `festive/regular.ttf` | Static weight 400 (regular); normal |
| Figtree | `figtree/regular.ttf`, `figtree/italic.ttf` | Variable weights 300–900; normal and italic |
| Finger Paint | `fingerpaint/regular.ttf` | Static weight 400 (regular); normal |
| Finlandica Headline | `finlandicaheadline/regular.ttf`, `finlandicaheadline/italic.ttf` | Variable weights 100–900; normal and italic |
| Finlandica Text | `finlandicatext/regular.ttf`, `finlandicatext/italic.ttf` | Variable weights 100–900; normal and italic |
| Fira Code | `firacode/regular.ttf` | Variable weights 300–700; normal |
| Fira Mono | `firamono/regular.ttf`, `firamono/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Fira Sans | `firasans/regular.ttf`, `firasans/bold.ttf`, `firasans/italic.ttf`, `firasans/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Fira Sans Condensed | `firasanscondensed/regular.ttf`, `firasanscondensed/bold.ttf`, `firasanscondensed/italic.ttf`, `firasanscondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Fira Sans Extra Condensed | `firasansextracondensed/regular.ttf`, `firasansextracondensed/bold.ttf`, `firasansextracondensed/italic.ttf`, `firasansextracondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Firjar | `firjar/regular.ttf` | Variable weights 100–800; normal |
| Fjalla One | `fjallaone/regular.ttf` | Static weight 400 (regular); normal |
| Fleur De Leah | `fleurdeleah/regular.ttf` | Static weight 400 (regular); normal |
| Flow Block | `flowblock/regular.ttf` | Static weight 400 (regular); normal |
| Flow Circular | `flowcircular/regular.ttf` | Static weight 400 (regular); normal |
| Flow Rounded | `flowrounded/regular.ttf` | Static weight 400 (regular); normal |
| Foldit | `foldit/regular.ttf` | Variable weights 100–900; normal |
| Fragment Mono | `fragmentmono/regular.ttf`, `fragmentmono/italic.ttf` | Static weight 400 (regular); normal and italic |
| Fragment Mono SC | `fragmentmonosc/regular.ttf`, `fragmentmonosc/italic.ttf` | Static weight 400 (regular); normal and italic |
| Francois One | `francoisone/regular.ttf` | Static weight 400 (regular); normal |
| Fraunces | `fraunces/regular.ttf`, `fraunces/italic.ttf` | Variable weights 100–900; normal and italic |
| Freckle Face | `freckleface/regular.ttf` | Static weight 400 (regular); normal |
| Fredoka | `fredoka/regular.ttf` | Variable weights 300–700; normal |
| Freehand | `freehand/regular.ttf` | Static weight 400 (regular); normal |
| Freeman | `freeman/regular.ttf` | Static weight 400 (regular); normal |
| Fresca | `fresca/regular.ttf` | Static weight 400 (regular); normal |
| Fruktur | `fruktur/regular.ttf`, `fruktur/italic.ttf` | Static weight 400 (regular); normal and italic |
| Fuggles | `fuggles/regular.ttf` | Static weight 400 (regular); normal |
| Funnel Display | `funneldisplay/regular.ttf` | Variable weights 300–800; normal |
| Funnel Sans | `funnelsans/regular.ttf`, `funnelsans/italic.ttf` | Variable weights 300–800; normal and italic |
| Fustat | `fustat/regular.ttf` | Variable weights 200–800; normal |
| Fuzzy Bubbles | `fuzzybubbles/regular.ttf`, `fuzzybubbles/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Ga Maamli | `gamaamli/regular.ttf` | Static weight 400 (regular); normal |
| Gabarito | `gabarito/regular.ttf` | Variable weights 400–900; normal |
| Gabriela | `gabriela/regular.ttf` | Static weight 400 (regular); normal |
| Gafata | `gafata/regular.ttf` | Static weight 400 (regular); normal |
| Gajraj One | `gajrajone/regular.ttf` | Static weight 400 (regular); normal |
| Galada | `galada/regular.ttf` | Static weight 400 (regular); normal |
| Galindo | `galindo/regular.ttf` | Static weight 400 (regular); normal |
| Gantari | `gantari/regular.ttf`, `gantari/italic.ttf` | Variable weights 100–900; normal and italic |
| Gasoek One | `gasoekone/regular.ttf` | Static weight 400 (regular); normal |
| Gayathri | `gayathri/regular.ttf`, `gayathri/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Geist | `geist/regular.ttf`, `geist/italic.ttf` | Variable weights 100–900; normal and italic |
| Geist Mono | `geistmono/regular.ttf`, `geistmono/italic.ttf` | Variable weights 100–900; normal and italic |
| Gelasio | `gelasio/regular.ttf`, `gelasio/italic.ttf` | Variable weights 400–700; normal and italic |
| Gemunu Libre | `gemunulibre/regular.ttf` | Variable weights 200–800; normal |
| Genos | `genos/regular.ttf`, `genos/italic.ttf` | Variable weights 100–900; normal and italic |
| Geologica | `geologica/regular.ttf` | Variable weights 100–900; normal |
| Geom | `geom/regular.ttf`, `geom/italic.ttf` | Variable weights 300–900; normal and italic |
| Geomini | `geomini/regular.ttf` | Variable weights 200–800; normal |
| Georama | `georama/regular.ttf`, `georama/italic.ttf` | Variable weights 100–900; normal and italic |
| Gideon Roman | `gideonroman/regular.ttf` | Static weight 400 (regular); normal |
| Gidole | `gidole/regular.ttf` | Static weight 400 (regular); normal |
| Gidugu | `gidugu/regular.ttf` | Static weight 400 (regular); normal |
| Gilda Display | `gildadisplay/regular.ttf` | Static weight 400 (regular); normal |
| Girassol | `girassol/regular.ttf` | Static weight 400 (regular); normal |
| Give You Glory | `giveyouglory/regular.ttf` | Static weight 400 (regular); normal |
| Glegoo | `glegoo/regular.ttf`, `glegoo/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Gloock | `gloock/regular.ttf` | Static weight 400 (regular); normal |
| Gloria Hallelujah | `gloriahallelujah/regular.ttf` | Static weight 400 (regular); normal |
| Glory | `glory/regular.ttf`, `glory/italic.ttf` | Variable weights 100–800; normal and italic |
| Gluten | `gluten/regular.ttf` | Variable weights 100–900; normal |
| Golos Text | `golostext/regular.ttf` | Variable weights 400–900; normal |
| Google Sans Code | `googlesanscode/regular.ttf`, `googlesanscode/italic.ttf` | Variable weights 300–800; normal and italic |
| Gorditas | `gorditas/regular.ttf`, `gorditas/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Gotu | `gotu/regular.ttf` | Static weight 400 (regular); normal |
| Goudy Bookletter 1911 | `goudybookletter1911/regular.ttf` | Static weight 400 (regular); normal |
| Graduate | `graduate/regular.ttf` | Static weight 400 (regular); normal |
| Grandiflora One | `grandifloraone/regular.ttf` | Static weight 400 (regular); normal |
| Grandstander | `grandstander/regular.ttf`, `grandstander/italic.ttf` | Variable weights 100–900; normal and italic |
| Grape Nuts | `grapenuts/regular.ttf` | Static weight 400 (regular); normal |
| Great Vibes | `greatvibes/regular.ttf` | Static weight 400 (regular); normal |
| Grechen Fuemen | `grechenfuemen/regular.ttf` | Static weight 400 (regular); normal |
| Grenze | `grenze/regular.ttf`, `grenze/italic.ttf` | Variable weights 100–900; normal and italic |
| Grenze Gotisch | `grenzegotisch/regular.ttf` | Variable weights 100–900; normal |
| Grey Qo | `greyqo/regular.ttf` | Static weight 400 (regular); normal |
| Gruppo | `gruppo/regular.ttf` | Static weight 400 (regular); normal |
| Gugi | `gugi/regular.ttf` | Static weight 400 (regular); normal |
| Gulzar | `gulzar/regular.ttf` | Static weight 400 (regular); normal |
| Gupter | `gupter/regular.ttf`, `gupter/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Gurajada | `gurajada/regular.ttf` | Static weight 400 (regular); normal |
| Gveret Levin | `gveretlevin/regular.ttf` | Static weight 400 (regular); normal |
| Gwendolyn | `gwendolyn/regular.ttf`, `gwendolyn/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Halant | `halant/regular.ttf`, `halant/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hanalei | `hanalei/regular.ttf` | Static weight 400 (regular); normal |
| Hanalei Fill | `hanaleifill/regular.ttf` | Static weight 400 (regular); normal |
| Handjet | `handjet/regular.ttf` | Variable weights 100–900; normal |
| Hanken Grotesk | `hankengrotesk/regular.ttf`, `hankengrotesk/italic.ttf` | Variable weights 100–900; normal and italic |
| Hanuman | `hanuman/regular.ttf` | Variable weights 100–900; normal |
| Happy Monkey | `happymonkey/regular.ttf` | Static weight 400 (regular); normal |
| Hedvig Letters Sans | `hedvigletterssans/regular.ttf` | Static weight 400 (regular); normal |
| Hedvig Letters Serif | `hedviglettersserif/regular.ttf` | Static weight 400 (regular); normal |
| Heebo | `heebo/regular.ttf` | Variable weights 100–900; normal |
| Hepta Slab | `heptaslab/regular.ttf` | Variable weights 1–900; normal |
| Hermeneus One | `hermeneusone/regular.ttf` | Static weight 400 (regular); normal |
| Hibur Mono | `hiburmono/regular.ttf` | Static weight 400 (regular); normal |
| Hind | `hind/regular.ttf`, `hind/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Colombo | `hindcolombo/regular.ttf`, `hindcolombo/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Guntur | `hindguntur/regular.ttf`, `hindguntur/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Jalandhar | `hindjalandhar/regular.ttf`, `hindjalandhar/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Kochi | `hindkochi/regular.ttf`, `hindkochi/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Madurai | `hindmadurai/regular.ttf`, `hindmadurai/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Mysuru | `hindmysuru/regular.ttf`, `hindmysuru/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Siliguri | `hindsiliguri/regular.ttf`, `hindsiliguri/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Hind Vadodara | `hindvadodara/regular.ttf`, `hindvadodara/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| Holtwood One SC | `holtwoodonesc/regular.ttf` | Static weight 400 (regular); normal |
| Homenaje | `homenaje/regular.ttf` | Static weight 400 (regular); normal |
| Host Grotesk | `hostgrotesk/regular.ttf`, `hostgrotesk/italic.ttf` | Variable weights 300–800; normal and italic |
| Hubballi | `hubballi/regular.ttf` | Static weight 400 (regular); normal |
| Hubot Sans | `hubotsans/regular.ttf`, `hubotsans/italic.ttf` | Variable weights 200–900; normal and italic |
| Hurricane | `hurricane/regular.ttf` | Static weight 400 (regular); normal |
| Ibarra Real Nova | `ibarrarealnova/regular.ttf`, `ibarrarealnova/italic.ttf` | Variable weights 400–700; normal and italic |
| IBM Plex Sans | `ibmplexsans/regular.ttf`, `ibmplexsans/italic.ttf` | Variable weights 100–700; normal and italic |
| IBM Plex Sans Arabic | `ibmplexsansarabic/regular.ttf`, `ibmplexsansarabic/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Sans Condensed | `ibmplexsanscondensed/regular.ttf`, `ibmplexsanscondensed/bold.ttf`, `ibmplexsanscondensed/italic.ttf`, `ibmplexsanscondensed/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| IBM Plex Sans Devanagari | `ibmplexsansdevanagari/regular.ttf`, `ibmplexsansdevanagari/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Sans Hebrew | `ibmplexsanshebrew/regular.ttf`, `ibmplexsanshebrew/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Sans JP | `ibmplexsansjp/regular.ttf`, `ibmplexsansjp/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Sans Thai | `ibmplexsansthai/regular.ttf`, `ibmplexsansthai/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Sans Thai Looped | `ibmplexsansthailooped/regular.ttf`, `ibmplexsansthailooped/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |
| IBM Plex Serif | `ibmplexserif/regular.ttf`, `ibmplexserif/bold.ttf`, `ibmplexserif/italic.ttf`, `ibmplexserif/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |
| Imbue | `imbue/regular.ttf` | Variable weights 100–900; normal |
| Imperial Script | `imperialscript/regular.ttf` | Static weight 400 (regular); normal |
| Imprima | `imprima/regular.ttf` | Static weight 400 (regular); normal |
| Inclusive Sans | `inclusivesans/regular.ttf`, `inclusivesans/italic.ttf` | Variable weights 300–700; normal and italic |
| Inconsolata | `inconsolata/regular.ttf` | Variable weights 200–900; normal |
| Indie Flower | `indieflower/regular.ttf` | Static weight 400 (regular); normal |
| Ingrid Darling | `ingriddarling/regular.ttf` | Static weight 400 (regular); normal |
| Inknut Antiqua | `inknutantiqua/regular.ttf`, `inknutantiqua/bold.ttf` | Static weights 400 (regular) and 700 (bold); normal |

Variable fonts are declared with their `wght` range. Some also have other
axes (Inter has `opsz`, for example). Unspecified axes stay at the font's
default. When declaring a variable font in `@font-face`, use a weight range
such as `font-weight: 100 900` and the matching `font-style`.

## Provenance

### Inter

- Copyright: `Copyright 2020 The Inter Project Authors (https://github.com/rsms/inter)`
- `inter/OFL.txt`: `<base>ofl/inter/OFL.txt`
- `inter/italic.ttf`: `<base>ofl/inter/Inter-Italic%5Bopsz%2Cwght%5D.ttf`
- `inter/regular.ttf`: `<base>ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf`

### Lora

- Copyright: `Copyright 2011 The Lora Project Authors (https://github.com/cyrealtype/Lora-Cyrillic), with Reserved Font Name "Lora".`
- `lora/OFL.txt`: `<base>ofl/lora/OFL.txt`
- `lora/italic.ttf`: `<base>ofl/lora/Lora-Italic%5Bwght%5D.ttf`
- `lora/regular.ttf`: `<base>ofl/lora/Lora%5Bwght%5D.ttf`

### IBM Plex Mono

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibm-plex-mono/OFL.txt`: `<base>ofl/ibmplexmono/OFL.txt`
- `ibm-plex-mono/bold-italic.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-BoldItalic.ttf`
- `ibm-plex-mono/bold.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Bold.ttf`
- `ibm-plex-mono/italic.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Italic.ttf`
- `ibm-plex-mono/regular.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Regular.ttf`

### ABeeZee

- Copyright: `Copyright 2011 The ABeeZee Project Authors (https://github.com/googlefonts/abeezee), with Reserved Font Name 'ABeeZee'`
- `abeezee/regular.ttf`: `<base>ofl/abeezee/ABeeZee-Regular.ttf`
- `abeezee/italic.ttf`: `<base>ofl/abeezee/ABeeZee-Italic.ttf`
- `abeezee/OFL.txt`: `<base>ofl/abeezee/OFL.txt`

### Abel

- Copyright: `Copyright (c) 2011, Matthew Desmond (http://www.madtype.com | mattdesmond@gmail.com),with Reserved Font Name Abel.`
- `abel/regular.ttf`: `<base>ofl/abel/Abel-Regular.ttf`
- `abel/OFL.txt`: `<base>ofl/abel/OFL.txt`

### Abhaya Libre

- Copyright: `Copyright (c) 2013-2016 Abhaya Libre Project Authors (https://github.com/mooniak/abhaya-libre-font).`
- `abhayalibre/regular.ttf`: `<base>ofl/abhayalibre/AbhayaLibre-Regular.ttf`
- `abhayalibre/bold.ttf`: `<base>ofl/abhayalibre/AbhayaLibre-Bold.ttf`
- `abhayalibre/OFL.txt`: `<base>ofl/abhayalibre/OFL.txt`

### Aboreto

- Copyright: `Copyright 2022 The Aboreto Project Authors (https://github.com/domija/Aboreto)`
- `aboreto/regular.ttf`: `<base>ofl/aboreto/Aboreto-Regular.ttf`
- `aboreto/OFL.txt`: `<base>ofl/aboreto/OFL.txt`

### Adamina

- Copyright: `Copyright (c) 2011, Cyreal (www.cyreal.org), with Reserved Font Name 'Adamina'.`
- `adamina/regular.ttf`: `<base>ofl/adamina/Adamina-Regular.ttf`
- `adamina/OFL.txt`: `<base>ofl/adamina/OFL.txt`

### ADLaM Display

- Copyright: `Copyright (c) 2022 by Microsoft. All rights reserved.`
- `adlamdisplay/regular.ttf`: `<base>ofl/adlamdisplay/ADLaMDisplay-Regular.ttf`
- `adlamdisplay/OFL.txt`: `<base>ofl/adlamdisplay/OFL.txt`

### Advent Pro

- Copyright: `Copyright 2018 The Advent Pro Project Authors (https://github.com/googlefonts/Advent)`
- `adventpro/regular.ttf`: `<base>ofl/adventpro/AdventPro%5Bwdth%2Cwght%5D.ttf`
- `adventpro/italic.ttf`: `<base>ofl/adventpro/AdventPro-Italic%5Bwdth%2Cwght%5D.ttf`
- `adventpro/OFL.txt`: `<base>ofl/adventpro/OFL.txt`

### Afacad

- Copyright: `Copyright 2023 The Afacad Project Authors (https://github.com/Dicotype/Afacad)`
- `afacad/regular.ttf`: `<base>ofl/afacad/Afacad%5Bwght%5D.ttf`
- `afacad/italic.ttf`: `<base>ofl/afacad/Afacad-Italic%5Bwght%5D.ttf`
- `afacad/OFL.txt`: `<base>ofl/afacad/OFL.txt`

### Afacad Flux

- Copyright: `Copyright 2023 The Afacad Project Authors (https://github.com/Dicotype/Afacad)`
- `afacadflux/regular.ttf`: `<base>ofl/afacadflux/AfacadFlux%5Bslnt%2Cwght%5D.ttf`
- `afacadflux/OFL.txt`: `<base>ofl/afacadflux/OFL.txt`

### Agbalumo

- Copyright: `Copyright 2023 The Agbalumo Project Authors (https://github.com/SorkinType/Agbalumo)`
- `agbalumo/regular.ttf`: `<base>ofl/agbalumo/Agbalumo-Regular.ttf`
- `agbalumo/OFL.txt`: `<base>ofl/agbalumo/OFL.txt`

### Agdasima

- Copyright: `Copyright 2023 The Agdasima Project Authors (https://github.com/docrepair-fonts/agdasima-fonts).`
- `agdasima/regular.ttf`: `<base>ofl/agdasima/Agdasima-Regular.ttf`
- `agdasima/bold.ttf`: `<base>ofl/agdasima/Agdasima-Bold.ttf`
- `agdasima/OFL.txt`: `<base>ofl/agdasima/OFL.txt`

### Agrave Pro

- Copyright: `Copyright 2026 The Agràve Pro Project Authors (https://github.com/daanjobsis/agrave-pro)`
- `agravepro/regular.ttf`: `<base>ofl/agravepro/AgravePro%5Bwght%5D.ttf`
- `agravepro/OFL.txt`: `<base>ofl/agravepro/OFL.txt`

### Agu Display

- Copyright: `Copyright 2023 The Agu Display Project Authors (https://github.com/theseunbadejo/Agu-Display)`
- `agudisplay/regular.ttf`: `<base>ofl/agudisplay/AguDisplay%5BMORF%5D.ttf`
- `agudisplay/OFL.txt`: `<base>ofl/agudisplay/OFL.txt`

### Akaya Kanadaka

- Copyright: `Copyright 2015 The Akaya Kanadaka Project Authors (https://github.com/vaishnavimurthy/Akaya-Kanadaka)`
- `akayakanadaka/regular.ttf`: `<base>ofl/akayakanadaka/AkayaKanadaka-Regular.ttf`
- `akayakanadaka/OFL.txt`: `<base>ofl/akayakanadaka/OFL.txt`

### Akaya Telivigala

- Copyright: `Copyright 2015 The Akaya Telivigala Project Authors (https://github.com/vaishnavimurthy/Akaya-Telivigala)`
- `akayatelivigala/regular.ttf`: `<base>ofl/akayatelivigala/AkayaTelivigala-Regular.ttf`
- `akayatelivigala/OFL.txt`: `<base>ofl/akayatelivigala/OFL.txt`

### Akronim

- Copyright: `Copyright (c) 2012 Grzegorz Klimczewski, Fonty.PL (www.fonty.pl), with Reserved Font Name 'Akronim'`
- `akronim/regular.ttf`: `<base>ofl/akronim/Akronim-Regular.ttf`
- `akronim/OFL.txt`: `<base>ofl/akronim/OFL.txt`

### Akshar

- Copyright: `Copyright 2020 The Akshar Type Project Authors (https://github.com/tallchai/akshar-type)`
- `akshar/regular.ttf`: `<base>ofl/akshar/Akshar%5BCTRS%2Cwght%5D.ttf`
- `akshar/OFL.txt`: `<base>ofl/akshar/OFL.txt`

### Akt

- Copyright: `Copyright 2024 The Akt Project Authors (https://github.com/dimgrenev/akt)`
- `akt/regular.ttf`: `<base>ofl/akt/Akt%5Bwght%5D.ttf`
- `akt/OFL.txt`: `<base>ofl/akt/OFL.txt`

### Alan Sans

- Copyright: `Copyright 2025 The Alan Sans Project Authors (https://github.com/alan-eu/Alan-Sans)`
- `alansans/regular.ttf`: `<base>ofl/alansans/AlanSans%5Bwght%5D.ttf`
- `alansans/OFL.txt`: `<base>ofl/alansans/OFL.txt`

### Alata

- Copyright: `Copyright 2016 The Alata Project Authors (https://github.com/SorkinType/Alata)`
- `alata/regular.ttf`: `<base>ofl/alata/Alata-Regular.ttf`
- `alata/OFL.txt`: `<base>ofl/alata/OFL.txt`

### Alatsi

- Copyright: `Copyright 2024 The Alatsi Project Authors (https://github.com/SorkinType/Alatsi)`
- `alatsi/regular.ttf`: `<base>ofl/alatsi/Alatsi-Regular.ttf`
- `alatsi/OFL.txt`: `<base>ofl/alatsi/OFL.txt`

### Albert Sans

- Copyright: `Copyright 2021 The Albert Sans Project Authors (https://github.com/usted/Albert-Sans)`
- `albertsans/regular.ttf`: `<base>ofl/albertsans/AlbertSans%5Bwght%5D.ttf`
- `albertsans/italic.ttf`: `<base>ofl/albertsans/AlbertSans-Italic%5Bwght%5D.ttf`
- `albertsans/OFL.txt`: `<base>ofl/albertsans/OFL.txt`

### Aldrich

- Copyright: `Copyright (c) 2011, Matthew Desmond (http://www.madtype.com | mattdesmond@gmail.com),with Reserved Font Name Aldrich.`
- `aldrich/regular.ttf`: `<base>ofl/aldrich/Aldrich-Regular.ttf`
- `aldrich/OFL.txt`: `<base>ofl/aldrich/OFL.txt`

### Alegreya

- Copyright: `Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)`
- `alegreya/regular.ttf`: `<base>ofl/alegreya/Alegreya%5Bwght%5D.ttf`
- `alegreya/italic.ttf`: `<base>ofl/alegreya/Alegreya-Italic%5Bwght%5D.ttf`
- `alegreya/OFL.txt`: `<base>ofl/alegreya/OFL.txt`

### Alegreya Sans

- Copyright: `Copyright 2013 The Alegreya Sans Project Authors (https://github.com/huertatipografica/Alegreya-Sans)`
- `alegreyasans/regular.ttf`: `<base>ofl/alegreyasans/AlegreyaSans-Regular.ttf`
- `alegreyasans/bold.ttf`: `<base>ofl/alegreyasans/AlegreyaSans-Bold.ttf`
- `alegreyasans/italic.ttf`: `<base>ofl/alegreyasans/AlegreyaSans-Italic.ttf`
- `alegreyasans/bold-italic.ttf`: `<base>ofl/alegreyasans/AlegreyaSans-BoldItalic.ttf`
- `alegreyasans/OFL.txt`: `<base>ofl/alegreyasans/OFL.txt`

### Alegreya Sans SC

- Copyright: `Copyright 2013 The Alegreya Sans Project Authors (https://github.com/huertatipografica/Alegreya-Sans)`
- `alegreyasanssc/regular.ttf`: `<base>ofl/alegreyasanssc/AlegreyaSansSC-Regular.ttf`
- `alegreyasanssc/bold.ttf`: `<base>ofl/alegreyasanssc/AlegreyaSansSC-Bold.ttf`
- `alegreyasanssc/italic.ttf`: `<base>ofl/alegreyasanssc/AlegreyaSansSC-Italic.ttf`
- `alegreyasanssc/bold-italic.ttf`: `<base>ofl/alegreyasanssc/AlegreyaSansSC-BoldItalic.ttf`
- `alegreyasanssc/OFL.txt`: `<base>ofl/alegreyasanssc/OFL.txt`

### Alegreya SC

- Copyright: `Copyright 2011 The Alegreya Project Authors (https://github.com/huertatipografica/Alegreya)`
- `alegreyasc/regular.ttf`: `<base>ofl/alegreyasc/AlegreyaSC-Regular.ttf`
- `alegreyasc/bold.ttf`: `<base>ofl/alegreyasc/AlegreyaSC-Bold.ttf`
- `alegreyasc/italic.ttf`: `<base>ofl/alegreyasc/AlegreyaSC-Italic.ttf`
- `alegreyasc/bold-italic.ttf`: `<base>ofl/alegreyasc/AlegreyaSC-BoldItalic.ttf`
- `alegreyasc/OFL.txt`: `<base>ofl/alegreyasc/OFL.txt`

### Aleo

- Copyright: `Copyright 2018 The Aleo Project Authors (https://github.com/AlessioLaiso/aleo)`
- `aleo/regular.ttf`: `<base>ofl/aleo/Aleo%5Bwght%5D.ttf`
- `aleo/italic.ttf`: `<base>ofl/aleo/Aleo-Italic%5Bwght%5D.ttf`
- `aleo/OFL.txt`: `<base>ofl/aleo/OFL.txt`

### Alex Brush

- Copyright: `Copyright 2011 The Alex Brush Project Authors (https://github.com/googlefonts/alex-brush)`
- `alexbrush/regular.ttf`: `<base>ofl/alexbrush/AlexBrush-Regular.ttf`
- `alexbrush/OFL.txt`: `<base>ofl/alexbrush/OFL.txt`

### Alexandria

- Copyright: `Copyright 2022 The Alexandria Project Authors (https://github.com/Gue3bara/Alexandria)`
- `alexandria/regular.ttf`: `<base>ofl/alexandria/Alexandria%5Bwght%5D.ttf`
- `alexandria/OFL.txt`: `<base>ofl/alexandria/OFL.txt`

### Alfa Slab One

- Copyright: `Copyright 2016 The Alfa Slab One Project Authors (http://www.jmsole.cl | info@jmsole.cl), with Reserved Font Name "Alfa Slab".`
- `alfaslabone/regular.ttf`: `<base>ofl/alfaslabone/AlfaSlabOne-Regular.ttf`
- `alfaslabone/OFL.txt`: `<base>ofl/alfaslabone/OFL.txt`

### Alice

- Copyright: `Copyright 2011 The Alice Project Authors (https://github.com/cyrealtype/Alice)`
- `alice/regular.ttf`: `<base>ofl/alice/Alice-Regular.ttf`
- `alice/OFL.txt`: `<base>ofl/alice/OFL.txt`

### Alien Block

- Copyright: `Copyright 2025 The Alien Block Project Authors (https://github.com/koci-design/AlienBlock)`
- `alienblock/regular.ttf`: `<base>ofl/alienblock/AlienBlock-Regular.ttf`
- `alienblock/OFL.txt`: `<base>ofl/alienblock/OFL.txt`

### Alike

- Copyright: `Copyright 2009 The Alike Project Authors (https://github.com/cyrealtype/Alike) with Reserved Font Name "Alike" and "Alike Angular".`
- `alike/regular.ttf`: `<base>ofl/alike/Alike-Regular.ttf`
- `alike/OFL.txt`: `<base>ofl/alike/OFL.txt`

### Alike Angular

- Copyright: `Copyright 2009 The Alike Angular Project Authors (https://github.com/cyrealtype/Alike-Angular) with Reserved Font Name "Alike" and "Alike Angular".`
- `alikeangular/regular.ttf`: `<base>ofl/alikeangular/AlikeAngular-Regular.ttf`
- `alikeangular/OFL.txt`: `<base>ofl/alikeangular/OFL.txt`

### Alkatra

- Copyright: `Copyright 2022 The Alkatra Project Authors (https://github.com/suman51284/Alkatra)`
- `alkatra/regular.ttf`: `<base>ofl/alkatra/Alkatra%5Bwght%5D.ttf`
- `alkatra/OFL.txt`: `<base>ofl/alkatra/OFL.txt`

### Allan

- Copyright: `Copyright (c) 2010-2012, Anton Koovit (anton@korkork.com), with Reserved Font Name 'Allan'`
- `allan/regular.ttf`: `<base>ofl/allan/Allan-Regular.ttf`
- `allan/bold.ttf`: `<base>ofl/allan/Allan-Bold.ttf`
- `allan/OFL.txt`: `<base>ofl/allan/OFL.txt`

### Allison

- Copyright: `Copyright 2020 The Allison Project Authors (https://github.com/googlefonts/allison)`
- `allison/regular.ttf`: `<base>ofl/allison/Allison-Regular.ttf`
- `allison/OFL.txt`: `<base>ofl/allison/OFL.txt`

### Allura

- Copyright: `Copyright 2010 The Allura Project Authors (https://github.com/googlefonts/allura)`
- `allura/regular.ttf`: `<base>ofl/allura/Allura-Regular.ttf`
- `allura/OFL.txt`: `<base>ofl/allura/OFL.txt`

### Almarai

- Copyright: `Copyright 2019 The Almarai Project Authors (https://github.com/JuergenWillrodt/Almarai)`
- `almarai/regular.ttf`: `<base>ofl/almarai/Almarai-Regular.ttf`
- `almarai/bold.ttf`: `<base>ofl/almarai/Almarai-Bold.ttf`
- `almarai/OFL.txt`: `<base>ofl/almarai/OFL.txt`

### Almendra

- Copyright: `Copyright (c) 2011-2012, Ana Sanfelippo (anasanfe@gmail.com), with Reserved Font Name 'Almendra'`
- `almendra/regular.ttf`: `<base>ofl/almendra/Almendra-Regular.ttf`
- `almendra/bold.ttf`: `<base>ofl/almendra/Almendra-Bold.ttf`
- `almendra/italic.ttf`: `<base>ofl/almendra/Almendra-Italic.ttf`
- `almendra/bold-italic.ttf`: `<base>ofl/almendra/Almendra-BoldItalic.ttf`
- `almendra/OFL.txt`: `<base>ofl/almendra/OFL.txt`

### Almendra Display

- Copyright: `Copyright (c) 2011-2012, Ana Sanfelippo (anasanfe@gmail.com), with Reserved Font Name 'Almendra'`
- `almendradisplay/regular.ttf`: `<base>ofl/almendradisplay/AlmendraDisplay-Regular.ttf`
- `almendradisplay/OFL.txt`: `<base>ofl/almendradisplay/OFL.txt`

### Almendra SC

- Copyright: `Copyright (c) 2011-2012, Ana Sanfelippo (anasanfe@gmail.com), with Reserved Font Name 'Almendra'`
- `almendrasc/regular.ttf`: `<base>ofl/almendrasc/AlmendraSC-Regular.ttf`
- `almendrasc/OFL.txt`: `<base>ofl/almendrasc/OFL.txt`

### Alumni Sans

- Copyright: `Copyright 2015 The Alumni Sans Project Authors (https://github.com/googlefonts/alumni)`
- `alumnisans/regular.ttf`: `<base>ofl/alumnisans/AlumniSans%5Bwght%5D.ttf`
- `alumnisans/italic.ttf`: `<base>ofl/alumnisans/AlumniSans-Italic%5Bwght%5D.ttf`
- `alumnisans/OFL.txt`: `<base>ofl/alumnisans/OFL.txt`

### Alumni Sans Collegiate One

- Copyright: `Copyright 2014 The Alumni Sans Collegiate Project Authors (https://github.com/googlefonts/alumni-sans-collegiate)`
- `alumnisanscollegiateone/regular.ttf`: `<base>ofl/alumnisanscollegiateone/AlumniSansCollegiateOne-Regular.ttf`
- `alumnisanscollegiateone/italic.ttf`: `<base>ofl/alumnisanscollegiateone/AlumniSansCollegiateOne-Italic.ttf`
- `alumnisanscollegiateone/OFL.txt`: `<base>ofl/alumnisanscollegiateone/OFL.txt`

### Alumni Sans Collegiate One SC

- Copyright: `Copyright 2014 The Alumni Sans Collegiate Project Authors (https://github.com/googlefonts/alumni-sans-collegiate)`
- `alumnisanscollegiateonesc/regular.ttf`: `<base>ofl/alumnisanscollegiateonesc/AlumniSansCollegiateOneSC-Regular.ttf`
- `alumnisanscollegiateonesc/italic.ttf`: `<base>ofl/alumnisanscollegiateonesc/AlumniSansCollegiateOneSC-Italic.ttf`
- `alumnisanscollegiateonesc/OFL.txt`: `<base>ofl/alumnisanscollegiateonesc/OFL.txt`

### Alumni Sans Inline One

- Copyright: `Copyright 2014 The Alumni Sans Inline Project Authors (https://github.com/googlefonts/alumni-sans-inline)`
- `alumnisansinlineone/regular.ttf`: `<base>ofl/alumnisansinlineone/AlumniSansInlineOne-Regular.ttf`
- `alumnisansinlineone/italic.ttf`: `<base>ofl/alumnisansinlineone/AlumniSansInlineOne-Italic.ttf`
- `alumnisansinlineone/OFL.txt`: `<base>ofl/alumnisansinlineone/OFL.txt`

### Alumni Sans Pinstripe

- Copyright: `Copyright 2014 The Alumni Sans Pinstripe Project Authors (https://github.com/googlefonts/alumni-sans-pinstripe)`
- `alumnisanspinstripe/regular.ttf`: `<base>ofl/alumnisanspinstripe/AlumniSansPinstripe-Regular.ttf`
- `alumnisanspinstripe/italic.ttf`: `<base>ofl/alumnisanspinstripe/AlumniSansPinstripe-Italic.ttf`
- `alumnisanspinstripe/OFL.txt`: `<base>ofl/alumnisanspinstripe/OFL.txt`

### Alumni Sans SC

- Copyright: `Copyright 2015 The Alumni Sans Project Authors (https://github.com/googlefonts/alumni)`
- `alumnisanssc/regular.ttf`: `<base>ofl/alumnisanssc/AlumniSansSC%5Bwght%5D.ttf`
- `alumnisanssc/italic.ttf`: `<base>ofl/alumnisanssc/AlumniSansSC-Italic%5Bwght%5D.ttf`
- `alumnisanssc/OFL.txt`: `<base>ofl/alumnisanssc/OFL.txt`

### Alyamama

- Copyright: `Copyright 2025 The Alyamama Project Authors (https://github.com/Mestaratype/AlYamama)`
- `alyamama/regular.ttf`: `<base>ofl/alyamama/Alyamama%5Bwght%5D.ttf`
- `alyamama/OFL.txt`: `<base>ofl/alyamama/OFL.txt`

### Amarante

- Copyright: `Copyright (c) 2012 by Sorkin Type Co (www.sorkintype.com), with Reserved Font Name "Amarante".`
- `amarante/regular.ttf`: `<base>ofl/amarante/Amarante-Regular.ttf`
- `amarante/OFL.txt`: `<base>ofl/amarante/OFL.txt`

### Amaranth

- Copyright: `Copyright 2016 The Amaranth Project Authors (https://github.com/googlefonts/amaranth)`
- `amaranth/regular.ttf`: `<base>ofl/amaranth/Amaranth-Regular.ttf`
- `amaranth/bold.ttf`: `<base>ofl/amaranth/Amaranth-Bold.ttf`
- `amaranth/italic.ttf`: `<base>ofl/amaranth/Amaranth-Italic.ttf`
- `amaranth/bold-italic.ttf`: `<base>ofl/amaranth/Amaranth-BoldItalic.ttf`
- `amaranth/OFL.txt`: `<base>ofl/amaranth/OFL.txt`

### Amarna

- Copyright: `Copyright 2025 The Amarna Project Authors (https://github.com/ijvanl/Amarna)`
- `amarna/regular.ttf`: `<base>ofl/amarna/Amarna%5Bwght%5D.ttf`
- `amarna/italic.ttf`: `<base>ofl/amarna/Amarna-Italic%5Bwght%5D.ttf`
- `amarna/OFL.txt`: `<base>ofl/amarna/OFL.txt`

### Amatic SC

- Copyright: `Copyright 2015 The Amatic SC Project Authors (https://github.com/googlefonts/AmaticSC)`
- `amaticsc/regular.ttf`: `<base>ofl/amaticsc/AmaticSC-Regular.ttf`
- `amaticsc/bold.ttf`: `<base>ofl/amaticsc/AmaticSC-Bold.ttf`
- `amaticsc/OFL.txt`: `<base>ofl/amaticsc/OFL.txt`

### Amiko

- Copyright: `Copyright (c) 2012, Impallari Type (www.impallari.com).`
- `amiko/regular.ttf`: `<base>ofl/amiko/Amiko-Regular.ttf`
- `amiko/bold.ttf`: `<base>ofl/amiko/Amiko-Bold.ttf`
- `amiko/OFL.txt`: `<base>ofl/amiko/OFL.txt`

### Amiri

- Copyright: `Copyright 2010-2022 The Amiri Project Authors (https://github.com/aliftype/amiri).`
- `amiri/regular.ttf`: `<base>ofl/amiri/Amiri-Regular.ttf`
- `amiri/bold.ttf`: `<base>ofl/amiri/Amiri-Bold.ttf`
- `amiri/italic.ttf`: `<base>ofl/amiri/Amiri-Italic.ttf`
- `amiri/bold-italic.ttf`: `<base>ofl/amiri/Amiri-BoldItalic.ttf`
- `amiri/OFL.txt`: `<base>ofl/amiri/OFL.txt`

### Amiri Quran

- Copyright: `Copyright 2010-2022 The Amiri Quran Project Authors (https://github.com/aliftype/amiri).`
- `amiriquran/regular.ttf`: `<base>ofl/amiriquran/AmiriQuran-Regular.ttf`
- `amiriquran/OFL.txt`: `<base>ofl/amiriquran/OFL.txt`

### Amita

- Copyright: `Copyright (c) 2014, Eduardo Rodriguez Tunni. Copyright (c) 2000, Modular Infotech, Pune, INDIA. All rights reserved. Copyright (c) 2011 by Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com). All rights reserved.`
- `amita/regular.ttf`: `<base>ofl/amita/Amita-Regular.ttf`
- `amita/bold.ttf`: `<base>ofl/amita/Amita-Bold.ttf`
- `amita/OFL.txt`: `<base>ofl/amita/OFL.txt`

### Anaheim

- Copyright: `Copyright 2012 The Anaheim Project Authors (https://github.com/googlefonts/anaheimFont)`
- `anaheim/regular.ttf`: `<base>ofl/anaheim/Anaheim%5Bwght%5D.ttf`
- `anaheim/OFL.txt`: `<base>ofl/anaheim/OFL.txt`

### Ancizar Sans

- Copyright: `Copyright 2014 The Ancizar Sans Project Authors (https://github.com/UNAL-OMD/UNAL-Ancizar)`
- `ancizarsans/regular.ttf`: `<base>ofl/ancizarsans/AncizarSans%5Bwght%5D.ttf`
- `ancizarsans/italic.ttf`: `<base>ofl/ancizarsans/AncizarSans-Italic%5Bwght%5D.ttf`
- `ancizarsans/OFL.txt`: `<base>ofl/ancizarsans/OFL.txt`

### Ancizar Serif

- Copyright: `Copyright 2014 The Ancizar Sans Project Authors (https://github.com/UNAL-OMD/UNAL-Ancizar); Copyright 2014 The Ancizar Serif Project Authors (https://github.com/UNAL-OMD/UNAL-Ancizar)`
- `ancizarserif/regular.ttf`: `<base>ofl/ancizarserif/AncizarSerif%5Bwght%5D.ttf`
- `ancizarserif/italic.ttf`: `<base>ofl/ancizarserif/AncizarSerif-Italic%5Bwght%5D.ttf`
- `ancizarserif/OFL.txt`: `<base>ofl/ancizarserif/OFL.txt`

### Andada Pro

- Copyright: `Copyright 2011 The Andada Pro Project Authors (https://github.com/huertatipografica/Andada)`
- `andadapro/regular.ttf`: `<base>ofl/andadapro/AndadaPro%5Bwght%5D.ttf`
- `andadapro/italic.ttf`: `<base>ofl/andadapro/AndadaPro-Italic%5Bwght%5D.ttf`
- `andadapro/OFL.txt`: `<base>ofl/andadapro/OFL.txt`

### Anek Bangla

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekbangla/regular.ttf`: `<base>ofl/anekbangla/AnekBangla%5Bwdth%2Cwght%5D.ttf`
- `anekbangla/OFL.txt`: `<base>ofl/anekbangla/OFL.txt`

### Anek Devanagari

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekdevanagari/regular.ttf`: `<base>ofl/anekdevanagari/AnekDevanagari%5Bwdth%2Cwght%5D.ttf`
- `anekdevanagari/OFL.txt`: `<base>ofl/anekdevanagari/OFL.txt`

### Anek Gujarati

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekgujarati/regular.ttf`: `<base>ofl/anekgujarati/AnekGujarati%5Bwdth%2Cwght%5D.ttf`
- `anekgujarati/OFL.txt`: `<base>ofl/anekgujarati/OFL.txt`

### Anek Gurmukhi

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekgurmukhi/regular.ttf`: `<base>ofl/anekgurmukhi/AnekGurmukhi%5Bwdth%2Cwght%5D.ttf`
- `anekgurmukhi/OFL.txt`: `<base>ofl/anekgurmukhi/OFL.txt`

### Anek Kannada

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekkannada/regular.ttf`: `<base>ofl/anekkannada/AnekKannada%5Bwdth%2Cwght%5D.ttf`
- `anekkannada/OFL.txt`: `<base>ofl/anekkannada/OFL.txt`

### Anek Latin

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `aneklatin/regular.ttf`: `<base>ofl/aneklatin/AnekLatin%5Bwdth%2Cwght%5D.ttf`
- `aneklatin/OFL.txt`: `<base>ofl/aneklatin/OFL.txt`

### Anek Malayalam

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekmalayalam/regular.ttf`: `<base>ofl/anekmalayalam/AnekMalayalam%5Bwdth%2Cwght%5D.ttf`
- `anekmalayalam/OFL.txt`: `<base>ofl/anekmalayalam/OFL.txt`

### Anek Odia

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anekodia/regular.ttf`: `<base>ofl/anekodia/AnekOdia%5Bwdth%2Cwght%5D.ttf`
- `anekodia/OFL.txt`: `<base>ofl/anekodia/OFL.txt`

### Anek Tamil

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anektamil/regular.ttf`: `<base>ofl/anektamil/AnekTamil%5Bwdth%2Cwght%5D.ttf`
- `anektamil/OFL.txt`: `<base>ofl/anektamil/OFL.txt`

### Anek Telugu

- Copyright: `Copyright 2021 The Anek Project Authors (https://github.com/EkType/Anek)`
- `anektelugu/regular.ttf`: `<base>ofl/anektelugu/AnekTelugu%5Bwdth%2Cwght%5D.ttf`
- `anektelugu/OFL.txt`: `<base>ofl/anektelugu/OFL.txt`

### Angkor

- Copyright: `Copyright 2020 The Angkor Project Authors (https://github.com/danhhong/Angkor)`
- `angkor/regular.ttf`: `<base>ofl/angkor/Angkor-Regular.ttf`
- `angkor/OFL.txt`: `<base>ofl/angkor/OFL.txt`

### Annie Use Your Telescope

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `annieuseyourtelescope/regular.ttf`: `<base>ofl/annieuseyourtelescope/AnnieUseYourTelescope-Regular.ttf`
- `annieuseyourtelescope/OFL.txt`: `<base>ofl/annieuseyourtelescope/OFL.txt`

### Anta

- Copyright: `Copyright 2019 The Anta Project Authors (https://github.com/Typedesigners/Anta-Regular)`
- `anta/regular.ttf`: `<base>ofl/anta/Anta-Regular.ttf`
- `anta/OFL.txt`: `<base>ofl/anta/OFL.txt`

### Antic Didone

- Copyright: `Copyright (c) 2011, Santiago Orozco (hi@typemade.mx), with Reserved Font Name "Antic Didone".`
- `anticdidone/regular.ttf`: `<base>ofl/anticdidone/AnticDidone-Regular.ttf`
- `anticdidone/OFL.txt`: `<base>ofl/anticdidone/OFL.txt`

### Antic Slab

- Copyright: `Copyright (c) 2011, Santiago Orozco (hi@typemade.mx), with Reserved Font Name "Antic Slab".`
- `anticslab/regular.ttf`: `<base>ofl/anticslab/AnticSlab-Regular.ttf`
- `anticslab/OFL.txt`: `<base>ofl/anticslab/OFL.txt`

### Anton

- Copyright: `Copyright 2020 The Anton Project Authors (https://github.com/googlefonts/AntonFont.git)`
- `anton/regular.ttf`: `<base>ofl/anton/Anton-Regular.ttf`
- `anton/OFL.txt`: `<base>ofl/anton/OFL.txt`

### Anton SC

- Copyright: `Copyright 2020 The Anton Project Authors (https://github.com/googlefonts/AntonFont.git)`
- `antonsc/regular.ttf`: `<base>ofl/antonsc/AntonSC-Regular.ttf`
- `antonsc/OFL.txt`: `<base>ofl/antonsc/OFL.txt`

### Antonio

- Copyright: `Copyright 2013 The Antonio Project Authors (https://github.com/googlefonts/antonioFont)`
- `antonio/regular.ttf`: `<base>ofl/antonio/Antonio%5Bwght%5D.ttf`
- `antonio/OFL.txt`: `<base>ofl/antonio/OFL.txt`

### Anuphan

- Copyright: `Copyright 2019 The Anuphan Project Authors (https://github.com/cadsondemak/Anuphan)`
- `anuphan/regular.ttf`: `<base>ofl/anuphan/Anuphan%5Bwght%5D.ttf`
- `anuphan/OFL.txt`: `<base>ofl/anuphan/OFL.txt`

### Anybody

- Copyright: `Copyright 2020 The Anybody Project Authors (https://github.com/Etcetera-Type-Co/Anybody)`
- `anybody/regular.ttf`: `<base>ofl/anybody/Anybody%5Bwdth%2Cwght%5D.ttf`
- `anybody/italic.ttf`: `<base>ofl/anybody/Anybody-Italic%5Bwdth%2Cwght%5D.ttf`
- `anybody/OFL.txt`: `<base>ofl/anybody/OFL.txt`

### Aoboshi One

- Copyright: `Copyright 2020 The Aoboshi Font Project Authors (https://github.com/matsuba723/Aoboshi), all rights reserved.`
- `aoboshione/regular.ttf`: `<base>ofl/aoboshione/AoboshiOne-Regular.ttf`
- `aoboshione/OFL.txt`: `<base>ofl/aoboshione/OFL.txt`

### AR One Sans

- Copyright: `Copyright 2022 The Ar-One-Sans Project Authors (https://github.com/niteeshy/ar-one-sans)`
- `aronesans/regular.ttf`: `<base>ofl/aronesans/AROneSans%5BARRR%2Cwght%5D.ttf`
- `aronesans/OFL.txt`: `<base>ofl/aronesans/OFL.txt`

### Architects Daughter

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `architectsdaughter/regular.ttf`: `<base>ofl/architectsdaughter/ArchitectsDaughter-Regular.ttf`
- `architectsdaughter/OFL.txt`: `<base>ofl/architectsdaughter/OFL.txt`

### Archivo

- Copyright: `Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo)`
- `archivo/regular.ttf`: `<base>ofl/archivo/Archivo%5Bwdth%2Cwght%5D.ttf`
- `archivo/italic.ttf`: `<base>ofl/archivo/Archivo-Italic%5Bwdth%2Cwght%5D.ttf`
- `archivo/OFL.txt`: `<base>ofl/archivo/OFL.txt`

### Archivo Black

- Copyright: `Copyright 2017 The Archivo Black Project Authors (https://github.com/Omnibus-Type/ArchivoBlack)`
- `archivoblack/regular.ttf`: `<base>ofl/archivoblack/ArchivoBlack-Regular.ttf`
- `archivoblack/OFL.txt`: `<base>ofl/archivoblack/OFL.txt`

### Archivo Narrow

- Copyright: `Copyright 2019 The Archivo Narrow Project Authors (https://github.com/Omnibus-Type/ArchivoNarrow)`
- `archivonarrow/regular.ttf`: `<base>ofl/archivonarrow/ArchivoNarrow%5Bwght%5D.ttf`
- `archivonarrow/italic.ttf`: `<base>ofl/archivonarrow/ArchivoNarrow-Italic%5Bwght%5D.ttf`
- `archivonarrow/OFL.txt`: `<base>ofl/archivonarrow/OFL.txt`

### Are You Serious

- Copyright: `Copyright 2004 The Are You Serious Project Authors (https://github.com/googlefonts/are-you-serious)`
- `areyouserious/regular.ttf`: `<base>ofl/areyouserious/AreYouSerious-Regular.ttf`
- `areyouserious/OFL.txt`: `<base>ofl/areyouserious/OFL.txt`

### Arima

- Copyright: `Copyright 2020 The Arima Project Authors (https://github.com/NDISCOVER/Arima-Font)`
- `arima/regular.ttf`: `<base>ofl/arima/Arima%5Bwght%5D.ttf`
- `arima/OFL.txt`: `<base>ofl/arima/OFL.txt`

### Arimo

- Copyright: `Copyright 2026 The Arimo Project Authors (https://github.com/googlefonts/arimo)`
- `arimo/regular.ttf`: `<base>ofl/arimo/Arimo%5Bwght%5D.ttf`
- `arimo/italic.ttf`: `<base>ofl/arimo/Arimo-Italic%5Bwght%5D.ttf`
- `arimo/OFL.txt`: `<base>ofl/arimo/OFL.txt`

### Arizonia

- Copyright: `Copyright 2007-2021 The Arizonia Project Authors (https://github.com/googlefonts/arizonia)`
- `arizonia/regular.ttf`: `<base>ofl/arizonia/Arizonia-Regular.ttf`
- `arizonia/OFL.txt`: `<base>ofl/arizonia/OFL.txt`

### Arsenal

- Copyright: `Copyright 2012 The Arsenal Project Authors (andrij.design@gmail.com)`
- `arsenal/regular.ttf`: `<base>ofl/arsenal/Arsenal-Regular.ttf`
- `arsenal/bold.ttf`: `<base>ofl/arsenal/Arsenal-Bold.ttf`
- `arsenal/italic.ttf`: `<base>ofl/arsenal/Arsenal-Italic.ttf`
- `arsenal/bold-italic.ttf`: `<base>ofl/arsenal/Arsenal-BoldItalic.ttf`
- `arsenal/OFL.txt`: `<base>ofl/arsenal/OFL.txt`

### Arsenal SC

- Copyright: `Copyright 2012 The Arsenal Project Authors (andrij.design@gmail.com)`
- `arsenalsc/regular.ttf`: `<base>ofl/arsenalsc/ArsenalSC-Regular.ttf`
- `arsenalsc/bold.ttf`: `<base>ofl/arsenalsc/ArsenalSC-Bold.ttf`
- `arsenalsc/italic.ttf`: `<base>ofl/arsenalsc/ArsenalSC-Italic.ttf`
- `arsenalsc/bold-italic.ttf`: `<base>ofl/arsenalsc/ArsenalSC-BoldItalic.ttf`
- `arsenalsc/OFL.txt`: `<base>ofl/arsenalsc/OFL.txt`

### Artifika

- Copyright: `Copyright 2010 The Artifika Project Authors (https://github.com/cyrealtype/Artifika)`
- `artifika/regular.ttf`: `<base>ofl/artifika/Artifika-Regular.ttf`
- `artifika/OFL.txt`: `<base>ofl/artifika/OFL.txt`

### Arya

- Copyright: `Copyright (c) 2013, Eduardo Tunni (http://www.tipo.net.ar edu@tipo.net.ar), with Reserved Font Name 'Sintony'`
- `arya/regular.ttf`: `<base>ofl/arya/Arya-Regular.ttf`
- `arya/bold.ttf`: `<base>ofl/arya/Arya-Bold.ttf`
- `arya/OFL.txt`: `<base>ofl/arya/OFL.txt`

### Asap

- Copyright: `Copyright 2018 The Asap Project Authors (https://github.com/Omnibus-Type/Asap)`
- `asap/regular.ttf`: `<base>ofl/asap/Asap%5Bwdth%2Cwght%5D.ttf`
- `asap/italic.ttf`: `<base>ofl/asap/Asap-Italic%5Bwdth%2Cwght%5D.ttf`
- `asap/OFL.txt`: `<base>ofl/asap/OFL.txt`

### Asap Condensed

- Copyright: `Copyright 2018 The Asap Project Authors (https://github.com/Omnibus-Type/Asap)`
- `asapcondensed/regular.ttf`: `<base>ofl/asapcondensed/AsapCondensed-Regular.ttf`
- `asapcondensed/bold.ttf`: `<base>ofl/asapcondensed/AsapCondensed-Bold.ttf`
- `asapcondensed/italic.ttf`: `<base>ofl/asapcondensed/AsapCondensed-Italic.ttf`
- `asapcondensed/bold-italic.ttf`: `<base>ofl/asapcondensed/AsapCondensed-BoldItalic.ttf`
- `asapcondensed/OFL.txt`: `<base>ofl/asapcondensed/OFL.txt`

### Asap Sharp

- Copyright: `Copyright 2026 The Asap Sharp Project Authors (https://github.com/Omnibus-Type/Asap_Sharp)`
- `asapsharp/regular.ttf`: `<base>ofl/asapsharp/AsapSharp%5Bwdth%2Cwght%5D.ttf`
- `asapsharp/italic.ttf`: `<base>ofl/asapsharp/AsapSharp-Italic%5Bwdth%2Cwght%5D.ttf`
- `asapsharp/OFL.txt`: `<base>ofl/asapsharp/OFL.txt`

### Asar

- Copyright: `Copyright (c) 2014-2015, Sorkin Type Co (sorkintype.com | sorkintype@gmail.com). Copyright 2014 Pria Ravichandran (pria.ravichandran@gmail.com). Asar is a trademark of Sorkin Type Co.`
- `asar/regular.ttf`: `<base>ofl/asar/Asar-Regular.ttf`
- `asar/OFL.txt`: `<base>ofl/asar/OFL.txt`

### Asimovian

- Copyright: `Copyright 2024 The Asimovian Project Authors (https://github.com/carolinashort/asimovian)`
- `asimovian/regular.ttf`: `<base>ofl/asimovian/Asimovian-Regular.ttf`
- `asimovian/OFL.txt`: `<base>ofl/asimovian/OFL.txt`

### Asset

- Copyright: `Copyright 2023 The Asset Project Authors (https://github.com/SorkinType/Asset)`
- `asset/regular.ttf`: `<base>ofl/asset/Asset-Regular.ttf`
- `asset/OFL.txt`: `<base>ofl/asset/OFL.txt`

### Astloch

- Copyright: `Copyright (c) 2010, 2011 Daniel Rhatigan (sparky@ultrasparky.org) with Reserved Font Name Astloch.`
- `astloch/regular.ttf`: `<base>ofl/astloch/Astloch-Regular.ttf`
- `astloch/bold.ttf`: `<base>ofl/astloch/Astloch-Bold.ttf`
- `astloch/OFL.txt`: `<base>ofl/astloch/OFL.txt`

### Athiti

- Copyright: `Copyright (c) 2015, Cadson Demak (info@cadsondemak.com)`
- `athiti/regular.ttf`: `<base>ofl/athiti/Athiti-Regular.ttf`
- `athiti/bold.ttf`: `<base>ofl/athiti/Athiti-Bold.ttf`
- `athiti/OFL.txt`: `<base>ofl/athiti/OFL.txt`

### Atkinson Hyperlegible

- Copyright: `Copyright 2020 Braille Institute of America, Inc.`
- `atkinsonhyperlegible/regular.ttf`: `<base>ofl/atkinsonhyperlegible/AtkinsonHyperlegible-Regular.ttf`
- `atkinsonhyperlegible/bold.ttf`: `<base>ofl/atkinsonhyperlegible/AtkinsonHyperlegible-Bold.ttf`
- `atkinsonhyperlegible/italic.ttf`: `<base>ofl/atkinsonhyperlegible/AtkinsonHyperlegible-Italic.ttf`
- `atkinsonhyperlegible/bold-italic.ttf`: `<base>ofl/atkinsonhyperlegible/AtkinsonHyperlegible-BoldItalic.ttf`
- `atkinsonhyperlegible/OFL.txt`: `<base>ofl/atkinsonhyperlegible/OFL.txt`

### Atkinson Hyperlegible Mono

- Copyright: `Copyright 2020-2024 The Atkinson Hyperlegible Mono Project Authors (https://github.com/googlefonts/atkinson-hyperlegible-next-mono)`
- `atkinsonhyperlegiblemono/regular.ttf`: `<base>ofl/atkinsonhyperlegiblemono/AtkinsonHyperlegibleMono%5Bwght%5D.ttf`
- `atkinsonhyperlegiblemono/italic.ttf`: `<base>ofl/atkinsonhyperlegiblemono/AtkinsonHyperlegibleMono-Italic%5Bwght%5D.ttf`
- `atkinsonhyperlegiblemono/OFL.txt`: `<base>ofl/atkinsonhyperlegiblemono/OFL.txt`

### Atkinson Hyperlegible Next

- Copyright: `Copyright 2020-2024 The Atkinson Hyperlegible Next Project Authors (https://github.com/googlefonts/atkinson-hyperlegible-next)`
- `atkinsonhyperlegiblenext/regular.ttf`: `<base>ofl/atkinsonhyperlegiblenext/AtkinsonHyperlegibleNext%5Bwght%5D.ttf`
- `atkinsonhyperlegiblenext/italic.ttf`: `<base>ofl/atkinsonhyperlegiblenext/AtkinsonHyperlegibleNext-Italic%5Bwght%5D.ttf`
- `atkinsonhyperlegiblenext/OFL.txt`: `<base>ofl/atkinsonhyperlegiblenext/OFL.txt`

### Atma

- Copyright: `Copyright 2010 The Atma Project Authors (https://github.com/BlackFoundryCom/Atma)`
- `atma/regular.ttf`: `<base>ofl/atma/Atma-Regular.ttf`
- `atma/bold.ttf`: `<base>ofl/atma/Atma-Bold.ttf`
- `atma/OFL.txt`: `<base>ofl/atma/OFL.txt`

### Atomic Age

- Copyright: `Copyright (c) 2013 - 2016, Sorkin Type Co (www.sorkintype.com) with Reserved Font Name 'Atomic Age'.`
- `atomicage/regular.ttf`: `<base>ofl/atomicage/AtomicAge-Regular.ttf`
- `atomicage/OFL.txt`: `<base>ofl/atomicage/OFL.txt`

### Aubrey

- Copyright: `Copyright 2011 The Aubrey Project Authors (https://github.com/cyrealtype/Aubrey)`
- `aubrey/regular.ttf`: `<base>ofl/aubrey/Aubrey-Regular.ttf`
- `aubrey/OFL.txt`: `<base>ofl/aubrey/OFL.txt`

### Audiowide

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Names "Audiowide"`
- `audiowide/regular.ttf`: `<base>ofl/audiowide/Audiowide-Regular.ttf`
- `audiowide/OFL.txt`: `<base>ofl/audiowide/OFL.txt`

### Autour One

- Copyright: `Copyright (c) 2012, Sorkin Type Co (www.sorkintype.com), with Reserved Font Name 'Autour'`
- `autourone/regular.ttf`: `<base>ofl/autourone/AutourOne-Regular.ttf`
- `autourone/OFL.txt`: `<base>ofl/autourone/OFL.txt`

### Average

- Copyright: `Copyright 2012 The Average Project Authors (https://github.com/etunni/average)`
- `average/regular.ttf`: `<base>ofl/average/Average-Regular.ttf`
- `average/OFL.txt`: `<base>ofl/average/OFL.txt`

### Average Sans

- Copyright: `Copyright (c) 2012, Eduardo Tunni (http://www.tipo.net.ar), with Reserved Font Name 'Average'`
- `averagesans/regular.ttf`: `<base>ofl/averagesans/AverageSans-Regular.ttf`
- `averagesans/OFL.txt`: `<base>ofl/averagesans/OFL.txt`

### Azeret Mono

- Copyright: `Copyright 2021 The Azeret Project Authors (https://github.com/displaay/azeret)`
- `azeretmono/regular.ttf`: `<base>ofl/azeretmono/AzeretMono%5Bwght%5D.ttf`
- `azeretmono/italic.ttf`: `<base>ofl/azeretmono/AzeretMono-Italic%5Bwght%5D.ttf`
- `azeretmono/OFL.txt`: `<base>ofl/azeretmono/OFL.txt`

### B612

- Copyright: `Copyright 2012 The B612 Project Authors (https://github.com/polarsys/b612)`
- `b612/regular.ttf`: `<base>ofl/b612/B612-Regular.ttf`
- `b612/bold.ttf`: `<base>ofl/b612/B612-Bold.ttf`
- `b612/italic.ttf`: `<base>ofl/b612/B612-Italic.ttf`
- `b612/bold-italic.ttf`: `<base>ofl/b612/B612-BoldItalic.ttf`
- `b612/OFL.txt`: `<base>ofl/b612/OFL.txt`

### B612 Mono

- Copyright: `Copyright 2012 The B612 Project Authors (https://github.com/polarsys/b612)`
- `b612mono/regular.ttf`: `<base>ofl/b612mono/B612Mono-Regular.ttf`
- `b612mono/bold.ttf`: `<base>ofl/b612mono/B612Mono-Bold.ttf`
- `b612mono/italic.ttf`: `<base>ofl/b612mono/B612Mono-Italic.ttf`
- `b612mono/bold-italic.ttf`: `<base>ofl/b612mono/B612Mono-BoldItalic.ttf`
- `b612mono/OFL.txt`: `<base>ofl/b612mono/OFL.txt`

### Babylonica

- Copyright: `Copyright 2010 The Babylonica Project Authors (https://github.com/googlefonts/babylonica)`
- `babylonica/regular.ttf`: `<base>ofl/babylonica/Babylonica-Regular.ttf`
- `babylonica/OFL.txt`: `<base>ofl/babylonica/OFL.txt`

### Bacasime Antique

- Copyright: `Copyright 2023 The Bacasime Antique Project Authors (https://github.com/docrepair-fonts/bacasime-antique-fonts), with Reserved Font Name "Playfair".`
- `bacasimeantique/regular.ttf`: `<base>ofl/bacasimeantique/BacasimeAntique-Regular.ttf`
- `bacasimeantique/OFL.txt`: `<base>ofl/bacasimeantique/OFL.txt`

### Bad Script

- Copyright: `Copyright 2011 The Bad Script Project Authors (https://github.com/alexeiva/badscript)`
- `badscript/regular.ttf`: `<base>ofl/badscript/BadScript-Regular.ttf`
- `badscript/OFL.txt`: `<base>ofl/badscript/OFL.txt`

### Badeen Display

- Copyright: `Copyright 2024 The Badeen Project Authors (https://github.com/haniadnansd/Badeen-Display)`
- `badeendisplay/regular.ttf`: `<base>ofl/badeendisplay/BadeenDisplay-Regular.ttf`
- `badeendisplay/OFL.txt`: `<base>ofl/badeendisplay/OFL.txt`

### Bagel Fat One

- Copyright: `Copyright 2022 The Bagel Fat Project Authors (https://github.com/JAMO-TYPEFACE/BagelFat)`
- `bagelfatone/regular.ttf`: `<base>ofl/bagelfatone/BagelFatOne-Regular.ttf`
- `bagelfatone/OFL.txt`: `<base>ofl/bagelfatone/OFL.txt`

### Bahiana

- Copyright: `Copyright 2016 The Bahiana Project Authors (omnibus.type@gmail.com)`
- `bahiana/regular.ttf`: `<base>ofl/bahiana/Bahiana-Regular.ttf`
- `bahiana/OFL.txt`: `<base>ofl/bahiana/OFL.txt`

### Bahianita

- Copyright: `Copyright 2018 The Bahianita Project Authors (https://github.com/Omnibus-Type/Bahiana/Bahianita)`
- `bahianita/regular.ttf`: `<base>ofl/bahianita/Bahianita-Regular.ttf`
- `bahianita/OFL.txt`: `<base>ofl/bahianita/OFL.txt`

### Bai Jamjuree

- Copyright: `Copyright 2018 Bai Jamjuree (https://github.com/cadsondemak/Bai-Jamjuree)`
- `baijamjuree/regular.ttf`: `<base>ofl/baijamjuree/BaiJamjuree-Regular.ttf`
- `baijamjuree/bold.ttf`: `<base>ofl/baijamjuree/BaiJamjuree-Bold.ttf`
- `baijamjuree/italic.ttf`: `<base>ofl/baijamjuree/BaiJamjuree-Italic.ttf`
- `baijamjuree/bold-italic.ttf`: `<base>ofl/baijamjuree/BaiJamjuree-BoldItalic.ttf`
- `baijamjuree/OFL.txt`: `<base>ofl/baijamjuree/OFL.txt`

### Bakbak One

- Copyright: `Copyright 2021 The Bakbak One Project Authors (https://github.com/googlefonts/bakbak)`
- `bakbakone/regular.ttf`: `<base>ofl/bakbakone/BakbakOne-Regular.ttf`
- `bakbakone/OFL.txt`: `<base>ofl/bakbakone/OFL.txt`

### Ballet

- Copyright: `Copyright 2020 The Ballet Project Authors (https://github.com/Omnibus-Type/Ballet)`
- `ballet/regular.ttf`: `<base>ofl/ballet/Ballet%5Bopsz%5D.ttf`
- `ballet/OFL.txt`: `<base>ofl/ballet/OFL.txt`

### Baloo 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloo2/regular.ttf`: `<base>ofl/baloo2/Baloo2%5Bwght%5D.ttf`
- `baloo2/OFL.txt`: `<base>ofl/baloo2/OFL.txt`

### Baloo Bhai 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloobhai2/regular.ttf`: `<base>ofl/baloobhai2/BalooBhai2%5Bwght%5D.ttf`
- `baloobhai2/OFL.txt`: `<base>ofl/baloobhai2/OFL.txt`

### Baloo Bhaijaan 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloobhaijaan2/regular.ttf`: `<base>ofl/baloobhaijaan2/BalooBhaijaan2%5Bwght%5D.ttf`
- `baloobhaijaan2/OFL.txt`: `<base>ofl/baloobhaijaan2/OFL.txt`

### Baloo Bhaina 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloobhaina2/regular.ttf`: `<base>ofl/baloobhaina2/BalooBhaina2%5Bwght%5D.ttf`
- `baloobhaina2/OFL.txt`: `<base>ofl/baloobhaina2/OFL.txt`

### Baloo Chettan 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloochettan2/regular.ttf`: `<base>ofl/baloochettan2/BalooChettan2%5Bwght%5D.ttf`
- `baloochettan2/OFL.txt`: `<base>ofl/baloochettan2/OFL.txt`

### Baloo Da 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `balooda2/regular.ttf`: `<base>ofl/balooda2/BalooDa2%5Bwght%5D.ttf`
- `balooda2/OFL.txt`: `<base>ofl/balooda2/OFL.txt`

### Baloo Paaji 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloopaaji2/regular.ttf`: `<base>ofl/baloopaaji2/BalooPaaji2%5Bwght%5D.ttf`
- `baloopaaji2/OFL.txt`: `<base>ofl/baloopaaji2/OFL.txt`

### Baloo Tamma 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `balootamma2/regular.ttf`: `<base>ofl/balootamma2/BalooTamma2%5Bwght%5D.ttf`
- `balootamma2/OFL.txt`: `<base>ofl/balootamma2/OFL.txt`

### Baloo Tammudu 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `balootammudu2/regular.ttf`: `<base>ofl/balootammudu2/BalooTammudu2%5Bwght%5D.ttf`
- `balootammudu2/OFL.txt`: `<base>ofl/balootammudu2/OFL.txt`

### Baloo Thambi 2

- Copyright: `Copyright 2019 The Baloo 2 Project Authors (https://github.com/EkType/Baloo2)`
- `baloothambi2/regular.ttf`: `<base>ofl/baloothambi2/BalooThambi2%5Bwght%5D.ttf`
- `baloothambi2/OFL.txt`: `<base>ofl/baloothambi2/OFL.txt`

### Balsamiq Sans

- Copyright: `Copyright 2011 The Balsamiq Sans Project Authors (https://github.com/balsamiq/balsamiqsans)`
- `balsamiqsans/regular.ttf`: `<base>ofl/balsamiqsans/BalsamiqSans-Regular.ttf`
- `balsamiqsans/bold.ttf`: `<base>ofl/balsamiqsans/BalsamiqSans-Bold.ttf`
- `balsamiqsans/italic.ttf`: `<base>ofl/balsamiqsans/BalsamiqSans-Italic.ttf`
- `balsamiqsans/bold-italic.ttf`: `<base>ofl/balsamiqsans/BalsamiqSans-BoldItalic.ttf`
- `balsamiqsans/OFL.txt`: `<base>ofl/balsamiqsans/OFL.txt`

### Bangers

- Copyright: `Copyright 2010 The Bangers Project Authors (https://github.com/googlefonts/bangers)`
- `bangers/regular.ttf`: `<base>ofl/bangers/Bangers-Regular.ttf`
- `bangers/OFL.txt`: `<base>ofl/bangers/OFL.txt`

### Barlow

- Copyright: `Copyright 2017 The Barlow Project Authors (https://github.com/jpt/barlow)`
- `barlow/regular.ttf`: `<base>ofl/barlow/Barlow-Regular.ttf`
- `barlow/bold.ttf`: `<base>ofl/barlow/Barlow-Bold.ttf`
- `barlow/italic.ttf`: `<base>ofl/barlow/Barlow-Italic.ttf`
- `barlow/bold-italic.ttf`: `<base>ofl/barlow/Barlow-BoldItalic.ttf`
- `barlow/OFL.txt`: `<base>ofl/barlow/OFL.txt`

### Barlow Condensed

- Copyright: `Copyright 2017 The Barlow Project Authors (https://github.com/jpt/barlow)`
- `barlowcondensed/regular.ttf`: `<base>ofl/barlowcondensed/BarlowCondensed-Regular.ttf`
- `barlowcondensed/bold.ttf`: `<base>ofl/barlowcondensed/BarlowCondensed-Bold.ttf`
- `barlowcondensed/italic.ttf`: `<base>ofl/barlowcondensed/BarlowCondensed-Italic.ttf`
- `barlowcondensed/bold-italic.ttf`: `<base>ofl/barlowcondensed/BarlowCondensed-BoldItalic.ttf`
- `barlowcondensed/OFL.txt`: `<base>ofl/barlowcondensed/OFL.txt`

### Barlow Semi Condensed

- Copyright: `Copyright 2017 The Barlow Project Authors (https://github.com/jpt/barlow)`
- `barlowsemicondensed/regular.ttf`: `<base>ofl/barlowsemicondensed/BarlowSemiCondensed-Regular.ttf`
- `barlowsemicondensed/bold.ttf`: `<base>ofl/barlowsemicondensed/BarlowSemiCondensed-Bold.ttf`
- `barlowsemicondensed/italic.ttf`: `<base>ofl/barlowsemicondensed/BarlowSemiCondensed-Italic.ttf`
- `barlowsemicondensed/bold-italic.ttf`: `<base>ofl/barlowsemicondensed/BarlowSemiCondensed-BoldItalic.ttf`
- `barlowsemicondensed/OFL.txt`: `<base>ofl/barlowsemicondensed/OFL.txt`

### Barriecito

- Copyright: `Copyright 2018 The Barriecito Project Authors (https://github.com/Omnibus-Type/Barrio/Barriecito)`
- `barriecito/regular.ttf`: `<base>ofl/barriecito/Barriecito-Regular.ttf`
- `barriecito/OFL.txt`: `<base>ofl/barriecito/OFL.txt`

### Barrio

- Copyright: `Copyright 2016 The Barrio Project Authors (omnibus.type@gmail.com)`
- `barrio/regular.ttf`: `<base>ofl/barrio/Barrio-Regular.ttf`
- `barrio/OFL.txt`: `<base>ofl/barrio/OFL.txt`

### Baskervville

- Copyright: `Copyright 2018 The Baskervville Project Authors (https://github.com/anrt-type/ANRT-Baskervville)`
- `baskervville/regular.ttf`: `<base>ofl/baskervville/Baskervville%5Bwght%5D.ttf`
- `baskervville/italic.ttf`: `<base>ofl/baskervville/Baskervville-Italic%5Bwght%5D.ttf`
- `baskervville/OFL.txt`: `<base>ofl/baskervville/OFL.txt`

### Baskervville SC

- Copyright: `Copyright 2018 The Baskervville Project Authors (https://github.com/anrt-type/ANRT-Baskervville)`
- `baskervvillesc/regular.ttf`: `<base>ofl/baskervvillesc/BaskervvilleSC%5Bwght%5D.ttf`
- `baskervvillesc/OFL.txt`: `<base>ofl/baskervvillesc/OFL.txt`

### Battambang

- Copyright: `Copyright 2019 The Battambang Project Authors (https://github.com/danhhong/Battambang)`
- `battambang/regular.ttf`: `<base>ofl/battambang/Battambang-Regular.ttf`
- `battambang/bold.ttf`: `<base>ofl/battambang/Battambang-Bold.ttf`
- `battambang/OFL.txt`: `<base>ofl/battambang/OFL.txt`

### Bayon

- Copyright: `Copyright 2019 The Bayon Project Authors (https://github.com/danhhong/Bayon)`
- `bayon/regular.ttf`: `<base>ofl/bayon/Bayon-Regular.ttf`
- `bayon/OFL.txt`: `<base>ofl/bayon/OFL.txt`

### BBH Bartle

- Copyright: `Copyright 2025 The BBH Project Authors (https://github.com/Studio-DRAMA/BBH)`
- `bbhbartle/regular.ttf`: `<base>ofl/bbhbartle/BBHBartle-Regular.ttf`
- `bbhbartle/OFL.txt`: `<base>ofl/bbhbartle/OFL.txt`

### BBH Bogle

- Copyright: `Copyright 2025 The BBH Project Authors (https://github.com/Studio-DRAMA/BBH)`
- `bbhbogle/regular.ttf`: `<base>ofl/bbhbogle/BBHBogle-Regular.ttf`
- `bbhbogle/OFL.txt`: `<base>ofl/bbhbogle/OFL.txt`

### BBH Hegarty

- Copyright: `Copyright 2025 The BBH Project Authors (https://github.com/Studio-DRAMA/BBH)`
- `bbhhegarty/regular.ttf`: `<base>ofl/bbhhegarty/BBHHegarty-Regular.ttf`
- `bbhhegarty/OFL.txt`: `<base>ofl/bbhhegarty/OFL.txt`

### Be Vietnam Pro

- Copyright: `Copyright 2021 The Be Vietnam Pro Project Authors (https://github.com/bettergui/BeVietnamPro),`
- `bevietnampro/regular.ttf`: `<base>ofl/bevietnampro/BeVietnamPro-Regular.ttf`
- `bevietnampro/bold.ttf`: `<base>ofl/bevietnampro/BeVietnamPro-Bold.ttf`
- `bevietnampro/italic.ttf`: `<base>ofl/bevietnampro/BeVietnamPro-Italic.ttf`
- `bevietnampro/bold-italic.ttf`: `<base>ofl/bevietnampro/BeVietnamPro-BoldItalic.ttf`
- `bevietnampro/OFL.txt`: `<base>ofl/bevietnampro/OFL.txt`

### Beau Rivage

- Copyright: `Copyright 2004 The Beau Rivage Project Authors (https://github.com/googlefonts/beau-rivage)`
- `beaurivage/regular.ttf`: `<base>ofl/beaurivage/BeauRivage-Regular.ttf`
- `beaurivage/OFL.txt`: `<base>ofl/beaurivage/OFL.txt`

### Bebas Neue

- Copyright: `Copyright © 2010 by Dharma Type.`
- `bebasneue/regular.ttf`: `<base>ofl/bebasneue/BebasNeue-Regular.ttf`
- `bebasneue/OFL.txt`: `<base>ofl/bebasneue/OFL.txt`

### Beiruti

- Copyright: `Copyright 2024 The Beiruti Project Authors (https://github.com/googlefonts/beiruti)`
- `beiruti/regular.ttf`: `<base>ofl/beiruti/Beiruti%5Bwght%5D.ttf`
- `beiruti/OFL.txt`: `<base>ofl/beiruti/OFL.txt`

### Belanosima

- Copyright: `Copyright 2023 The Belanosima Project Authors (https://github.com/docrepair-fonts/belanosima-fonts), with Reserved Font Name "Josefin Sans".`
- `belanosima/regular.ttf`: `<base>ofl/belanosima/Belanosima-Regular.ttf`
- `belanosima/bold.ttf`: `<base>ofl/belanosima/Belanosima-Bold.ttf`
- `belanosima/OFL.txt`: `<base>ofl/belanosima/OFL.txt`

### Bellefair

- Copyright: `Copyright 2015 The Bellefair Project Authors (https://github.com/shinntype/bellefair)`
- `bellefair/regular.ttf`: `<base>ofl/bellefair/Bellefair-Regular.ttf`
- `bellefair/OFL.txt`: `<base>ofl/bellefair/OFL.txt`

### Belleza

- Copyright: `Copyright 2012 The Belleza Project Authors (https://github.com/etunni/belleza)`
- `belleza/regular.ttf`: `<base>ofl/belleza/Belleza-Regular.ttf`
- `belleza/OFL.txt`: `<base>ofl/belleza/OFL.txt`

### Bellota

- Copyright: `Copyright 2019 The Bellota Project Authors (https://github.com/kemie/Bellota-Font)`
- `bellota/regular.ttf`: `<base>ofl/bellota/Bellota-Regular.ttf`
- `bellota/bold.ttf`: `<base>ofl/bellota/Bellota-Bold.ttf`
- `bellota/italic.ttf`: `<base>ofl/bellota/Bellota-Italic.ttf`
- `bellota/bold-italic.ttf`: `<base>ofl/bellota/Bellota-BoldItalic.ttf`
- `bellota/OFL.txt`: `<base>ofl/bellota/OFL.txt`

### Bellota Text

- Copyright: `Copyright 2019 The Bellota Project Authors (https://github.com/kemie/Bellota-Font)`
- `bellotatext/regular.ttf`: `<base>ofl/bellotatext/BellotaText-Regular.ttf`
- `bellotatext/bold.ttf`: `<base>ofl/bellotatext/BellotaText-Bold.ttf`
- `bellotatext/italic.ttf`: `<base>ofl/bellotatext/BellotaText-Italic.ttf`
- `bellotatext/bold-italic.ttf`: `<base>ofl/bellotatext/BellotaText-BoldItalic.ttf`
- `bellotatext/OFL.txt`: `<base>ofl/bellotatext/OFL.txt`

### BenchNine

- Copyright: `Copyright (c) 2012, vernon adams (vern@newtypography.co.uk), with Reserved Font Name 'BenchNine'.`
- `benchnine/regular.ttf`: `<base>ofl/benchnine/BenchNine-Regular.ttf`
- `benchnine/bold.ttf`: `<base>ofl/benchnine/BenchNine-Bold.ttf`
- `benchnine/OFL.txt`: `<base>ofl/benchnine/OFL.txt`

### Benne

- Copyright: `Copyright 2015 The Benne Project Authors (https://github.com/googlefonts/Benne)`
- `benne/regular.ttf`: `<base>ofl/benne/Benne-Regular.ttf`
- `benne/OFL.txt`: `<base>ofl/benne/OFL.txt`

### Berkshire Swash

- Copyright: `Copyright (c) 2012 by Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Names "Berkshire Swash"`
- `berkshireswash/regular.ttf`: `<base>ofl/berkshireswash/BerkshireSwash-Regular.ttf`
- `berkshireswash/OFL.txt`: `<base>ofl/berkshireswash/OFL.txt`

### Besley

- Copyright: `Copyright 2020 The Besley Project Authors (https://github.com/indestructible-type/Besley)`
- `besley/regular.ttf`: `<base>ofl/besley/Besley%5Bwght%5D.ttf`
- `besley/italic.ttf`: `<base>ofl/besley/Besley-Italic%5Bwght%5D.ttf`
- `besley/OFL.txt`: `<base>ofl/besley/OFL.txt`

### Betania Patmos

- Copyright: `Copyright 2011 The Betània Patmos Font Project Authors (https://github.com/huertatipografica/betania-patmos)`
- `betaniapatmos/regular.ttf`: `<base>ofl/betaniapatmos/BetaniaPatmos-Regular.ttf`
- `betaniapatmos/OFL.txt`: `<base>ofl/betaniapatmos/OFL.txt`

### Betania Patmos GDL

- Copyright: `Copyright 2011 The Betània Patmos Font Project Authors (https://github.com/huertatipografica/betania-patmos)`
- `betaniapatmosgdl/regular.ttf`: `<base>ofl/betaniapatmosgdl/BetaniaPatmosGDL-Regular.ttf`
- `betaniapatmosgdl/OFL.txt`: `<base>ofl/betaniapatmosgdl/OFL.txt`

### Betania Patmos In

- Copyright: `Copyright 2011 The Betània Patmos Font Project Authors (https://github.com/huertatipografica/betania-patmos)`
- `betaniapatmosin/regular.ttf`: `<base>ofl/betaniapatmosin/BetaniaPatmosIn-Regular.ttf`
- `betaniapatmosin/OFL.txt`: `<base>ofl/betaniapatmosin/OFL.txt`

### Betania Patmos In GDL

- Copyright: `Copyright 2011 The Betània Patmos Font Project Authors (https://github.com/huertatipografica/betania-patmos)`
- `betaniapatmosingdl/regular.ttf`: `<base>ofl/betaniapatmosingdl/BetaniaPatmosInGDL-Regular.ttf`
- `betaniapatmosingdl/OFL.txt`: `<base>ofl/betaniapatmosingdl/OFL.txt`

### Beth Ellen

- Copyright: `Copyright 2018 The Beth Ellen Project Authors (https://github.com/googlefonts/BethEllen)`
- `bethellen/regular.ttf`: `<base>ofl/bethellen/BethEllen-Regular.ttf`
- `bethellen/OFL.txt`: `<base>ofl/bethellen/OFL.txt`

### Bevan

- Copyright: `Copyright 2016 The Bevan Project Authors (https://github.com/googlefonts/BevanFont)`
- `bevan/regular.ttf`: `<base>ofl/bevan/Bevan-Regular.ttf`
- `bevan/italic.ttf`: `<base>ofl/bevan/Bevan-Italic.ttf`
- `bevan/OFL.txt`: `<base>ofl/bevan/OFL.txt`

### BhuTuka Expanded One

- Copyright: `Copyright 2017 The BhuTuka Expanded One Project Authors (https://github.com/erinmclaughlin/BhuTuka-Extended-One)`
- `bhutukaexpandedone/regular.ttf`: `<base>ofl/bhutukaexpandedone/BhuTukaExpandedOne-Regular.ttf`
- `bhutukaexpandedone/OFL.txt`: `<base>ofl/bhutukaexpandedone/OFL.txt`

### Big Shoulders

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshoulders/regular.ttf`: `<base>ofl/bigshoulders/BigShoulders%5Bopsz%2Cwght%5D.ttf`
- `bigshoulders/OFL.txt`: `<base>ofl/bigshoulders/OFL.txt`

### Big Shoulders Display

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersdisplay/regular.ttf`: `<base>ofl/bigshouldersdisplay/BigShouldersDisplay%5Bwght%5D.ttf`
- `bigshouldersdisplay/OFL.txt`: `<base>ofl/bigshouldersdisplay/OFL.txt`

### Big Shoulders Display SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersdisplaysc/regular.ttf`: `<base>ofl/bigshouldersdisplaysc/BigShouldersDisplaySC%5Bwght%5D.ttf`
- `bigshouldersdisplaysc/OFL.txt`: `<base>ofl/bigshouldersdisplaysc/OFL.txt`

### Big Shoulders Inline

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersinline/regular.ttf`: `<base>ofl/bigshouldersinline/BigShouldersInline%5Bopsz%2Cwght%5D.ttf`
- `bigshouldersinline/OFL.txt`: `<base>ofl/bigshouldersinline/OFL.txt`

### Big Shoulders Inline Display

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersinlinedisplay/regular.ttf`: `<base>ofl/bigshouldersinlinedisplay/BigShouldersInlineDisplay%5Bwght%5D.ttf`
- `bigshouldersinlinedisplay/OFL.txt`: `<base>ofl/bigshouldersinlinedisplay/OFL.txt`

### Big Shoulders Inline Display SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersinlinedisplaysc/regular.ttf`: `<base>ofl/bigshouldersinlinedisplaysc/BigShouldersInlineDisplaySC%5Bwght%5D.ttf`
- `bigshouldersinlinedisplaysc/OFL.txt`: `<base>ofl/bigshouldersinlinedisplaysc/OFL.txt`

### Big Shoulders Inline Text

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersinlinetext/regular.ttf`: `<base>ofl/bigshouldersinlinetext/BigShouldersInlineText%5Bwght%5D.ttf`
- `bigshouldersinlinetext/OFL.txt`: `<base>ofl/bigshouldersinlinetext/OFL.txt`

### Big Shoulders Inline Text SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersinlinetextsc/regular.ttf`: `<base>ofl/bigshouldersinlinetextsc/BigShouldersInlineTextSC%5Bwght%5D.ttf`
- `bigshouldersinlinetextsc/OFL.txt`: `<base>ofl/bigshouldersinlinetextsc/OFL.txt`

### Big Shoulders Stencil

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersstencil/regular.ttf`: `<base>ofl/bigshouldersstencil/BigShouldersStencil%5Bopsz%2Cwght%5D.ttf`
- `bigshouldersstencil/OFL.txt`: `<base>ofl/bigshouldersstencil/OFL.txt`

### Big Shoulders Stencil Display

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersstencildisplay/regular.ttf`: `<base>ofl/bigshouldersstencildisplay/BigShouldersStencilDisplay%5Bwght%5D.ttf`
- `bigshouldersstencildisplay/OFL.txt`: `<base>ofl/bigshouldersstencildisplay/OFL.txt`

### Big Shoulders Stencil Display SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersstencildisplaysc/regular.ttf`: `<base>ofl/bigshouldersstencildisplaysc/BigShouldersStencilDisplaySC%5Bwght%5D.ttf`
- `bigshouldersstencildisplaysc/OFL.txt`: `<base>ofl/bigshouldersstencildisplaysc/OFL.txt`

### Big Shoulders Stencil Text

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersstenciltext/regular.ttf`: `<base>ofl/bigshouldersstenciltext/BigShouldersStencilText%5Bwght%5D.ttf`
- `bigshouldersstenciltext/OFL.txt`: `<base>ofl/bigshouldersstenciltext/OFL.txt`

### Big Shoulders Stencil Text SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshouldersstenciltextsc/regular.ttf`: `<base>ofl/bigshouldersstenciltextsc/BigShouldersStencilTextSC%5Bwght%5D.ttf`
- `bigshouldersstenciltextsc/OFL.txt`: `<base>ofl/bigshouldersstenciltextsc/OFL.txt`

### Big Shoulders Text

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshoulderstext/regular.ttf`: `<base>ofl/bigshoulderstext/BigShouldersText%5Bwght%5D.ttf`
- `bigshoulderstext/OFL.txt`: `<base>ofl/bigshoulderstext/OFL.txt`

### Big Shoulders Text SC

- Copyright: `Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)`
- `bigshoulderstextsc/regular.ttf`: `<base>ofl/bigshoulderstextsc/BigShouldersTextSC%5Bwght%5D.ttf`
- `bigshoulderstextsc/OFL.txt`: `<base>ofl/bigshoulderstextsc/OFL.txt`

### Bigelow Rules

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Names 'Bigelow Rules'`
- `bigelowrules/regular.ttf`: `<base>ofl/bigelowrules/BigelowRules-Regular.ttf`
- `bigelowrules/OFL.txt`: `<base>ofl/bigelowrules/OFL.txt`

### Bilbo

- Copyright: `Copyright 2011 The Bilbo Project Authors (https://github.com/googlefonts/bilbo)`
- `bilbo/regular.ttf`: `<base>ofl/bilbo/Bilbo-Regular.ttf`
- `bilbo/OFL.txt`: `<base>ofl/bilbo/OFL.txt`

### BioRhyme

- Copyright: `Copyright 2016 The BioRhyme Project Authors (https://github.com/aoifemooney/makingbiorhyme)`
- `biorhyme/regular.ttf`: `<base>ofl/biorhyme/BioRhyme%5Bwdth%2Cwght%5D.ttf`
- `biorhyme/OFL.txt`: `<base>ofl/biorhyme/OFL.txt`

### BioRhyme Expanded

- Copyright: `Copyright 2016 Aoife Mooney (aoifemooney@gmail.com www.aoifemooney.org)`
- `biorhymeexpanded/regular.ttf`: `<base>ofl/biorhymeexpanded/BioRhymeExpanded-Regular.ttf`
- `biorhymeexpanded/bold.ttf`: `<base>ofl/biorhymeexpanded/BioRhymeExpanded-Bold.ttf`
- `biorhymeexpanded/OFL.txt`: `<base>ofl/biorhymeexpanded/OFL.txt`

### Birthstone

- Copyright: `Copyright 2019 The Birthstone Project Authors (https://github.com/googlefonts/birthstone)`
- `birthstone/regular.ttf`: `<base>ofl/birthstone/Birthstone-Regular.ttf`
- `birthstone/OFL.txt`: `<base>ofl/birthstone/OFL.txt`

### Birthstone Bounce

- Copyright: `Copyright 2019 The Birthstone Bounce Project Authors (https://github.com/googlefonts/birthstone-bounce)`
- `birthstonebounce/regular.ttf`: `<base>ofl/birthstonebounce/BirthstoneBounce-Regular.ttf`
- `birthstonebounce/OFL.txt`: `<base>ofl/birthstonebounce/OFL.txt`

### Biryani

- Copyright: `Copyright (c) 2015 Dan Reynolds. Copyright (c) 2015 Mathieu Réguer.`
- `biryani/regular.ttf`: `<base>ofl/biryani/Biryani-Regular.ttf`
- `biryani/bold.ttf`: `<base>ofl/biryani/Biryani-Bold.ttf`
- `biryani/OFL.txt`: `<base>ofl/biryani/OFL.txt`

### Bitcount

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcount/regular.ttf`: `<base>ofl/bitcount/Bitcount%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcount/OFL.txt`: `<base>ofl/bitcount/OFL.txt`

### Bitcount Grid Double

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountgriddouble/regular.ttf`: `<base>ofl/bitcountgriddouble/BitcountGridDouble%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcountgriddouble/OFL.txt`: `<base>ofl/bitcountgriddouble/OFL.txt`

### Bitcount Grid Double Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountgriddoubleink/regular.ttf`: `<base>ofl/bitcountgriddoubleink/BitcountGridDoubleInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountgriddoubleink/OFL.txt`: `<base>ofl/bitcountgriddoubleink/OFL.txt`

### Bitcount Grid Single

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountgridsingle/regular.ttf`: `<base>ofl/bitcountgridsingle/BitcountGridSingle%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcountgridsingle/OFL.txt`: `<base>ofl/bitcountgridsingle/OFL.txt`

### Bitcount Grid Single Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountgridsingleink/regular.ttf`: `<base>ofl/bitcountgridsingleink/BitcountGridSingleInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountgridsingleink/OFL.txt`: `<base>ofl/bitcountgridsingleink/OFL.txt`

### Bitcount Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountink/regular.ttf`: `<base>ofl/bitcountink/BitcountInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountink/OFL.txt`: `<base>ofl/bitcountink/OFL.txt`

### Bitcount Prop Double

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountpropdouble/regular.ttf`: `<base>ofl/bitcountpropdouble/BitcountPropDouble%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcountpropdouble/OFL.txt`: `<base>ofl/bitcountpropdouble/OFL.txt`

### Bitcount Prop Double Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountpropdoubleink/regular.ttf`: `<base>ofl/bitcountpropdoubleink/BitcountPropDoubleInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountpropdoubleink/OFL.txt`: `<base>ofl/bitcountpropdoubleink/OFL.txt`

### Bitcount Prop Single

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountpropsingle/regular.ttf`: `<base>ofl/bitcountpropsingle/BitcountPropSingle%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcountpropsingle/OFL.txt`: `<base>ofl/bitcountpropsingle/OFL.txt`

### Bitcount Prop Single Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountpropsingleink/regular.ttf`: `<base>ofl/bitcountpropsingleink/BitcountPropSingleInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountpropsingleink/OFL.txt`: `<base>ofl/bitcountpropsingleink/OFL.txt`

### Bitcount Single

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountsingle/regular.ttf`: `<base>ofl/bitcountsingle/BitcountSingle%5BCRSV%2CELSH%2CELXP%2Cslnt%2Cwght%5D.ttf`
- `bitcountsingle/OFL.txt`: `<base>ofl/bitcountsingle/OFL.txt`

### Bitcount Single Ink

- Copyright: `Copyright 1980 The Bitcount Project Authors (https://github.com/petrvanblokland/TYPETR-Bitcount)`
- `bitcountsingleink/regular.ttf`: `<base>ofl/bitcountsingleink/BitcountSingleInk%5BCRSV%2CELSH%2CELXP%2CSZP1%2CSZP2%2CXPN1%2CXPN2%2CYPN1%2CYPN2%2Cslnt%2Cwght%5D.ttf`
- `bitcountsingleink/OFL.txt`: `<base>ofl/bitcountsingleink/OFL.txt`

### Black Han Sans

- Copyright: `Copyright 2015 The Black Han Sans Project Authors (https://github.com/zesstype/Black-Han-Sans)`
- `blackhansans/regular.ttf`: `<base>ofl/blackhansans/BlackHanSans-Regular.ttf`
- `blackhansans/OFL.txt`: `<base>ofl/blackhansans/OFL.txt`

### Black Ops One

- Copyright: `Copyright 2022 The Black-Ops Project Authors (https://github.com/googlefonts/googlefonts-project-template)`
- `blackopsone/regular.ttf`: `<base>ofl/blackopsone/BlackOpsOne-Regular.ttf`
- `blackopsone/OFL.txt`: `<base>ofl/blackopsone/OFL.txt`

### Blaka

- Copyright: `Copyright 2019 The Blaka Project Authors (https://github.com/Gue3bara/Blaka)`
- `blaka/regular.ttf`: `<base>ofl/blaka/Blaka-Regular.ttf`
- `blaka/OFL.txt`: `<base>ofl/blaka/OFL.txt`

### Blaka Hollow

- Copyright: `Copyright 2019 The Blaka Project Authors (https://github.com/Gue3bara/Blaka)`
- `blakahollow/regular.ttf`: `<base>ofl/blakahollow/BlakaHollow-Regular.ttf`
- `blakahollow/OFL.txt`: `<base>ofl/blakahollow/OFL.txt`

### Blaka Ink

- Copyright: `Copyright 2019 The Blaka Project Authors (https://github.com/Gue3bara/Blaka)`
- `blakaink/regular.ttf`: `<base>ofl/blakaink/BlakaInk-Regular.ttf`
- `blakaink/OFL.txt`: `<base>ofl/blakaink/OFL.txt`

### Blinker

- Copyright: `Copyright 2019 The Blinker Project Authors (https://github.com/supertype-de/Blinker)`
- `blinker/regular.ttf`: `<base>ofl/blinker/Blinker-Regular.ttf`
- `blinker/bold.ttf`: `<base>ofl/blinker/Blinker-Bold.ttf`
- `blinker/OFL.txt`: `<base>ofl/blinker/OFL.txt`

### Bodoni Moda

- Copyright: `Copyright 2020 The Bodoni Moda Project Authors (https://github.com/indestructible-type/Bodoni)`
- `bodonimoda/regular.ttf`: `<base>ofl/bodonimoda/BodoniModa%5Bopsz%2Cwght%5D.ttf`
- `bodonimoda/italic.ttf`: `<base>ofl/bodonimoda/BodoniModa-Italic%5Bopsz%2Cwght%5D.ttf`
- `bodonimoda/OFL.txt`: `<base>ofl/bodonimoda/OFL.txt`

### Bodoni Moda SC

- Copyright: `Copyright 2020 The Bodoni Moda Project Authors (https://github.com/indestructible-type/Bodoni)`
- `bodonimodasc/regular.ttf`: `<base>ofl/bodonimodasc/BodoniModaSC%5Bopsz%2Cwght%5D.ttf`
- `bodonimodasc/italic.ttf`: `<base>ofl/bodonimodasc/BodoniModaSC-Italic%5Bopsz%2Cwght%5D.ttf`
- `bodonimodasc/OFL.txt`: `<base>ofl/bodonimodasc/OFL.txt`

### Bokor

- Copyright: `Copyright 2020 The Bokor Project Authors (https://github.com/danhhong/Bokor)`
- `bokor/regular.ttf`: `<base>ofl/bokor/Bokor-Regular.ttf`
- `bokor/OFL.txt`: `<base>ofl/bokor/OFL.txt`

### Boldonse

- Copyright: `Copyright 2024 The Boldonse Project Authors (https://github.com/googlefonts/boldonse)`
- `boldonse/regular.ttf`: `<base>ofl/boldonse/Boldonse-Regular.ttf`
- `boldonse/OFL.txt`: `<base>ofl/boldonse/OFL.txt`

### Bona Nova

- Copyright: `Copyright 2020 The Bona Nova Project Authors (https://github.com/kosmynkab/Brygada-1918)`
- `bonanova/regular.ttf`: `<base>ofl/bonanova/BonaNova-Regular.ttf`
- `bonanova/bold.ttf`: `<base>ofl/bonanova/BonaNova-Bold.ttf`
- `bonanova/italic.ttf`: `<base>ofl/bonanova/BonaNova-Italic.ttf`
- `bonanova/OFL.txt`: `<base>ofl/bonanova/OFL.txt`

### Bona Nova SC

- Copyright: `Copyright 2020 The Bona Nova Project Authors (https://github.com/kosmynkab/Bona-Nova)`
- `bonanovasc/regular.ttf`: `<base>ofl/bonanovasc/BonaNovaSC-Regular.ttf`
- `bonanovasc/bold.ttf`: `<base>ofl/bonanovasc/BonaNovaSC-Bold.ttf`
- `bonanovasc/italic.ttf`: `<base>ofl/bonanovasc/BonaNovaSC-Italic.ttf`
- `bonanovasc/OFL.txt`: `<base>ofl/bonanovasc/OFL.txt`

### Bonheur Royale

- Copyright: `Copyright 2005-2021 The Bonheur Royale Project Authors (https://github.com/googlefonts/bonheur-royale)`
- `bonheurroyale/regular.ttf`: `<base>ofl/bonheurroyale/BonheurRoyale-Regular.ttf`
- `bonheurroyale/OFL.txt`: `<base>ofl/bonheurroyale/OFL.txt`

### Borel

- Copyright: `Copyright 2023 The Borel Project Authors (https://github.com/RosaWagner/Borel)`
- `borel/regular.ttf`: `<base>ofl/borel/Borel-Regular.ttf`
- `borel/OFL.txt`: `<base>ofl/borel/OFL.txt`

### Braah One

- Copyright: `Copyright 2020-2023 The Braah Font Project Authors (https://github.com/artandtype/Braah)`
- `braahone/regular.ttf`: `<base>ofl/braahone/BraahOne-Regular.ttf`
- `braahone/OFL.txt`: `<base>ofl/braahone/OFL.txt`

### Brawler

- Copyright: `Copyright 2011 The Brawler Project Authors (https://github.com/cyrealtype/Brawler)`
- `brawler/regular.ttf`: `<base>ofl/brawler/Brawler-Regular.ttf`
- `brawler/bold.ttf`: `<base>ofl/brawler/Brawler-Bold.ttf`
- `brawler/OFL.txt`: `<base>ofl/brawler/OFL.txt`

### Bricolage Grotesque

- Copyright: `Copyright 2022 The Bricolage Grotesque Project Authors (https://github.com/ateliertriay/bricolage)`
- `bricolagegrotesque/regular.ttf`: `<base>ofl/bricolagegrotesque/BricolageGrotesque%5Bopsz%2Cwdth%2Cwght%5D.ttf`
- `bricolagegrotesque/OFL.txt`: `<base>ofl/bricolagegrotesque/OFL.txt`

### Briem Hand

- Copyright: `Copyright 2023 The Briem Hand Project Authors (https://github.com/SorkinType/Briem-Hand)`
- `briemhand/regular.ttf`: `<base>ofl/briemhand/BriemHand%5Bwght%5D.ttf`
- `briemhand/OFL.txt`: `<base>ofl/briemhand/OFL.txt`

### Bruno Ace

- Copyright: `Copyright 2023 The Bruno Ace Project Authors (https://github.com/googlefonts/Bruno-ace)`
- `brunoace/regular.ttf`: `<base>ofl/brunoace/BrunoAce-Regular.ttf`
- `brunoace/OFL.txt`: `<base>ofl/brunoace/OFL.txt`

### Bruno Ace SC

- Copyright: `Copyright 2023 The Bruno Ace Project Authors (https://github.com/googlefonts/Bruno-ace)`
- `brunoacesc/regular.ttf`: `<base>ofl/brunoacesc/BrunoAceSC-Regular.ttf`
- `brunoacesc/OFL.txt`: `<base>ofl/brunoacesc/OFL.txt`

### Brygada 1918

- Copyright: `Copyright 2020 The Brygada 1918 Project Authors (https://github.com/kosmynkab/Brygada-1918)`
- `brygada1918/regular.ttf`: `<base>ofl/brygada1918/Brygada1918%5Bwght%5D.ttf`
- `brygada1918/italic.ttf`: `<base>ofl/brygada1918/Brygada1918-Italic%5Bwght%5D.ttf`
- `brygada1918/OFL.txt`: `<base>ofl/brygada1918/OFL.txt`

### Buenard

- Copyright: `Copyright 2011-2025 The Buenard Project Authors (https://github.com/googlefonts/buenard)`
- `buenard/regular.ttf`: `<base>ofl/buenard/Buenard%5Bwght%5D.ttf`
- `buenard/OFL.txt`: `<base>ofl/buenard/OFL.txt`

### Bungee

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungee/regular.ttf`: `<base>ofl/bungee/Bungee-Regular.ttf`
- `bungee/OFL.txt`: `<base>ofl/bungee/OFL.txt`

### Bungee Color

- Copyright: `Copyright 2008 The Bungee Project Authors (david@djr.com)`
- `bungeecolor/regular.ttf`: `<base>ofl/bungeecolor/BungeeColor-Regular.ttf`
- `bungeecolor/OFL.txt`: `<base>ofl/bungeecolor/OFL.txt`

### Bungee Hairline

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeehairline/regular.ttf`: `<base>ofl/bungeehairline/BungeeHairline-Regular.ttf`
- `bungeehairline/OFL.txt`: `<base>ofl/bungeehairline/OFL.txt`

### Bungee Inline

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeeinline/regular.ttf`: `<base>ofl/bungeeinline/BungeeInline-Regular.ttf`
- `bungeeinline/OFL.txt`: `<base>ofl/bungeeinline/OFL.txt`

### Bungee Outline

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeeoutline/regular.ttf`: `<base>ofl/bungeeoutline/BungeeOutline-Regular.ttf`
- `bungeeoutline/OFL.txt`: `<base>ofl/bungeeoutline/OFL.txt`

### Bungee Shade

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeeshade/regular.ttf`: `<base>ofl/bungeeshade/BungeeShade-Regular.ttf`
- `bungeeshade/OFL.txt`: `<base>ofl/bungeeshade/OFL.txt`

### Bungee Spice

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeespice/regular.ttf`: `<base>ofl/bungeespice/BungeeSpice-Regular.ttf`
- `bungeespice/OFL.txt`: `<base>ofl/bungeespice/OFL.txt`

### Bungee Tint

- Copyright: `Copyright 2023 The Bungee Project Authors (https://github.com/djrrb/Bungee)`
- `bungeetint/regular.ttf`: `<base>ofl/bungeetint/BungeeTint-Regular.ttf`
- `bungeetint/OFL.txt`: `<base>ofl/bungeetint/OFL.txt`

### Bytesized

- Copyright: `Copyright 2024 The Bytesized Project Authors (https://github.com/balt-dev/bytesized-gf)`
- `bytesized/regular.ttf`: `<base>ofl/bytesized/Bytesized-Regular.ttf`
- `bytesized/OFL.txt`: `<base>ofl/bytesized/OFL.txt`

### Caacupe One

- Copyright: `Copyright 2014-2026 The Caacupe One Project Authors (https://github.com/googlefonts/caacupe)`
- `caacupeone/regular.ttf`: `<base>ofl/caacupeone/CaacupeOne-Regular.ttf`
- `caacupeone/OFL.txt`: `<base>ofl/caacupeone/OFL.txt`

### Cabin

- Copyright: `Copyright 2018 The Cabin Project Authors (https://github.com/impallari/Cabin.git)`
- `cabin/regular.ttf`: `<base>ofl/cabin/Cabin%5Bwdth%2Cwght%5D.ttf`
- `cabin/italic.ttf`: `<base>ofl/cabin/Cabin-Italic%5Bwdth%2Cwght%5D.ttf`
- `cabin/OFL.txt`: `<base>ofl/cabin/OFL.txt`

### Cabin Condensed

- Copyright: `Copyright 2016 The Cabin Project Authors (impallari@gmail.com)`
- `cabincondensed/regular.ttf`: `<base>ofl/cabincondensed/CabinCondensed-Regular.ttf`
- `cabincondensed/bold.ttf`: `<base>ofl/cabincondensed/CabinCondensed-Bold.ttf`
- `cabincondensed/OFL.txt`: `<base>ofl/cabincondensed/OFL.txt`

### Cabin Sketch

- Copyright: `Copyright 2011 The Cabin Project Authors (impallari@gmail.com), with Reserved Font Name "Cabin", "Cabin Sketch".`
- `cabinsketch/regular.ttf`: `<base>ofl/cabinsketch/CabinSketch-Regular.ttf`
- `cabinsketch/bold.ttf`: `<base>ofl/cabinsketch/CabinSketch-Bold.ttf`
- `cabinsketch/OFL.txt`: `<base>ofl/cabinsketch/OFL.txt`

### Cagliostro

- Copyright: `Copyright (c) 2011, Matthew Desmond (http://www.madtype.com | mattdesmond@gmail.com),with Reserved Font Name Cagliostro.`
- `cagliostro/regular.ttf`: `<base>ofl/cagliostro/Cagliostro-Regular.ttf`
- `cagliostro/OFL.txt`: `<base>ofl/cagliostro/OFL.txt`

### Cairo

- Copyright: `Copyright 2009 The Cairo Project Authors (https://github.com/Gue3bara/Cairo)`
- `cairo/regular.ttf`: `<base>ofl/cairo/Cairo%5Bslnt%2Cwght%5D.ttf`
- `cairo/OFL.txt`: `<base>ofl/cairo/OFL.txt`

### Cairo Play

- Copyright: `Copyright 2009 The Cairo Project Authors (https://github.com/Gue3bara/Cairo)`
- `cairoplay/regular.ttf`: `<base>ofl/cairoplay/CairoPlay%5Bslnt%2Cwght%5D.ttf`
- `cairoplay/OFL.txt`: `<base>ofl/cairoplay/OFL.txt`

### Cal Sans

- Copyright: `Copyright 2021 The Cal Sans Project Authors (https://github.com/calcom/font)`
- `calsans/regular.ttf`: `<base>ofl/calsans/CalSans-Regular.ttf`
- `calsans/OFL.txt`: `<base>ofl/calsans/OFL.txt`

### Caladea

- Copyright: `Copyright 2012 The Caladea Project Authors (https://github.com/huertatipografica/Caladea)`
- `caladea/regular.ttf`: `<base>ofl/caladea/Caladea-Regular.ttf`
- `caladea/bold.ttf`: `<base>ofl/caladea/Caladea-Bold.ttf`
- `caladea/italic.ttf`: `<base>ofl/caladea/Caladea-Italic.ttf`
- `caladea/bold-italic.ttf`: `<base>ofl/caladea/Caladea-BoldItalic.ttf`
- `caladea/OFL.txt`: `<base>ofl/caladea/OFL.txt`

### Calistoga

- Copyright: `Copyright 2019 The Calistoga Project Authors (https://github.com/SorkinType/Calistoga)`
- `calistoga/regular.ttf`: `<base>ofl/calistoga/Calistoga-Regular.ttf`
- `calistoga/OFL.txt`: `<base>ofl/calistoga/OFL.txt`

### Cambay

- Copyright: `Copyright (c) 2014 Pooja Saxena (www.poojasaxena.in)`
- `cambay/regular.ttf`: `<base>ofl/cambay/Cambay-Regular.ttf`
- `cambay/bold.ttf`: `<base>ofl/cambay/Cambay-Bold.ttf`
- `cambay/italic.ttf`: `<base>ofl/cambay/Cambay-Italic.ttf`
- `cambay/bold-italic.ttf`: `<base>ofl/cambay/Cambay-BoldItalic.ttf`
- `cambay/OFL.txt`: `<base>ofl/cambay/OFL.txt`

### Cantarell

- Copyright: `Copyright 2009 The Cantarell Project Authors (https://github.com/davelab6/cantarell)`
- `cantarell/regular.ttf`: `<base>ofl/cantarell/Cantarell-Regular.ttf`
- `cantarell/bold.ttf`: `<base>ofl/cantarell/Cantarell-Bold.ttf`
- `cantarell/italic.ttf`: `<base>ofl/cantarell/Cantarell-Italic.ttf`
- `cantarell/bold-italic.ttf`: `<base>ofl/cantarell/Cantarell-BoldItalic.ttf`
- `cantarell/OFL.txt`: `<base>ofl/cantarell/OFL.txt`

### Caprasimo

- Copyright: `Copyright 2023 The Caprasimo Project Authors (https://github.com/docrepair-fonts/caprasimo-fonts).`
- `caprasimo/regular.ttf`: `<base>ofl/caprasimo/Caprasimo-Regular.ttf`
- `caprasimo/OFL.txt`: `<base>ofl/caprasimo/OFL.txt`

### Capriola

- Copyright: `Copyright 2025 The Capriola Project Authors (https://github.com/SorkinType/Capriola-VF)`
- `capriola/regular.ttf`: `<base>ofl/capriola/Capriola%5Bwght%5D.ttf`
- `capriola/OFL.txt`: `<base>ofl/capriola/OFL.txt`

### Caramel

- Copyright: `Copyright 2004-2021 The Caramel Royale Project Authors (https://github.com/googlefonts/caramel)`
- `caramel/regular.ttf`: `<base>ofl/caramel/Caramel-Regular.ttf`
- `caramel/OFL.txt`: `<base>ofl/caramel/OFL.txt`

### Carattere

- Copyright: `Copyright 2020 The Carattere Project Authors (https://github.com/googlefonts/carattere)`
- `carattere/regular.ttf`: `<base>ofl/carattere/Carattere-Regular.ttf`
- `carattere/OFL.txt`: `<base>ofl/carattere/OFL.txt`

### Cardo

- Copyright: `Copyright (c) 2002-2011, David J. Perry (hospes02@scholarsfonts.net)`
- `cardo/regular.ttf`: `<base>ofl/cardo/Cardo-Regular.ttf`
- `cardo/bold.ttf`: `<base>ofl/cardo/Cardo-Bold.ttf`
- `cardo/italic.ttf`: `<base>ofl/cardo/Cardo-Italic.ttf`
- `cardo/OFL.txt`: `<base>ofl/cardo/OFL.txt`

### Carlito

- Copyright: `Copyright 2013 The Carlito Project Authors (https://github.com/googlefonts/carlito), with Reserved Font Name "Carlito"`
- `carlito/regular.ttf`: `<base>ofl/carlito/Carlito-Regular.ttf`
- `carlito/bold.ttf`: `<base>ofl/carlito/Carlito-Bold.ttf`
- `carlito/italic.ttf`: `<base>ofl/carlito/Carlito-Italic.ttf`
- `carlito/bold-italic.ttf`: `<base>ofl/carlito/Carlito-BoldItalic.ttf`
- `carlito/OFL.txt`: `<base>ofl/carlito/OFL.txt`

### Carrois Gothic

- Copyright: `Copyright (c) 2011 by Ralph du Carrois, with Reserved Font Name 'Carrois'`
- `carroisgothic/regular.ttf`: `<base>ofl/carroisgothic/CarroisGothic-Regular.ttf`
- `carroisgothic/OFL.txt`: `<base>ofl/carroisgothic/OFL.txt`

### Carrois Gothic SC

- Copyright: `Copyright (c) 2011 by Ralph du Carrois, with Reserved Font Name 'Carrois'`
- `carroisgothicsc/regular.ttf`: `<base>ofl/carroisgothicsc/CarroisGothicSC-Regular.ttf`
- `carroisgothicsc/OFL.txt`: `<base>ofl/carroisgothicsc/OFL.txt`

### Castoro

- Copyright: `Copyright 2020 The Castoro Project Authors (https://github.com/TiroTypeworks/Castoro)`
- `castoro/regular.ttf`: `<base>ofl/castoro/Castoro%5Bwght%5D.ttf`
- `castoro/italic.ttf`: `<base>ofl/castoro/Castoro-Italic%5Bwght%5D.ttf`
- `castoro/OFL.txt`: `<base>ofl/castoro/OFL.txt`

### Castoro Titling

- Copyright: `Copyright 2020 The Castoro Project Authors (https://github.com/TiroTypeworks/Castoro)`
- `castorotitling/regular.ttf`: `<base>ofl/castorotitling/CastoroTitling-Regular.ttf`
- `castorotitling/OFL.txt`: `<base>ofl/castorotitling/OFL.txt`

### Catamaran

- Copyright: `Copyright 2014 The Catamaran Authors (pria.ravichandran@gmail.com)`
- `catamaran/regular.ttf`: `<base>ofl/catamaran/Catamaran%5Bwght%5D.ttf`
- `catamaran/OFL.txt`: `<base>ofl/catamaran/OFL.txt`

### Cause

- Copyright: `Copyright 2025 The Cause Project Authors (https://github.com/xconsau/Cause)`
- `cause/regular.ttf`: `<base>ofl/cause/Cause%5Bwght%5D.ttf`
- `cause/OFL.txt`: `<base>ofl/cause/OFL.txt`

### Caveat

- Copyright: `Copyright 2014 The Caveat Project Authors (https://github.com/googlefonts/caveat)`
- `caveat/regular.ttf`: `<base>ofl/caveat/Caveat%5Bwght%5D.ttf`
- `caveat/OFL.txt`: `<base>ofl/caveat/OFL.txt`

### Caveat Brush

- Copyright: `Copyright 2015 Google Inc. All Rights Reserved.`
- `caveatbrush/regular.ttf`: `<base>ofl/caveatbrush/CaveatBrush-Regular.ttf`
- `caveatbrush/OFL.txt`: `<base>ofl/caveatbrush/OFL.txt`

### Cedarville Cursive

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `cedarvillecursive/regular.ttf`: `<base>ofl/cedarvillecursive/Cedarville-Cursive.ttf`
- `cedarvillecursive/OFL.txt`: `<base>ofl/cedarvillecursive/OFL.txt`

### Chakra Petch

- Copyright: `Copyright 2018 The Chakra Petch Project Authors (https://github.com/m4rc1e/Chakra-Petch.git)`
- `chakrapetch/regular.ttf`: `<base>ofl/chakrapetch/ChakraPetch-Regular.ttf`
- `chakrapetch/bold.ttf`: `<base>ofl/chakrapetch/ChakraPetch-Bold.ttf`
- `chakrapetch/italic.ttf`: `<base>ofl/chakrapetch/ChakraPetch-Italic.ttf`
- `chakrapetch/bold-italic.ttf`: `<base>ofl/chakrapetch/ChakraPetch-BoldItalic.ttf`
- `chakrapetch/OFL.txt`: `<base>ofl/chakrapetch/OFL.txt`

### Changa

- Copyright: `Copyright 2018 The Changa Project Authors (https://github.com/googlefonts/changa-vf)`
- `changa/regular.ttf`: `<base>ofl/changa/Changa%5Bwght%5D.ttf`
- `changa/OFL.txt`: `<base>ofl/changa/OFL.txt`

### Chango

- Copyright: `Copyright (c) 2011 Fontstage (info@fontstage.com), with Reserved Font Names, 'Chango'`
- `chango/regular.ttf`: `<base>ofl/chango/Chango-Regular.ttf`
- `chango/OFL.txt`: `<base>ofl/chango/OFL.txt`

### Charm

- Copyright: `Copyright 2018 The Charm Project Authors (https://github.com/cadsondemak/charm)`
- `charm/regular.ttf`: `<base>ofl/charm/Charm-Regular.ttf`
- `charm/bold.ttf`: `<base>ofl/charm/Charm-Bold.ttf`
- `charm/OFL.txt`: `<base>ofl/charm/OFL.txt`

### Charmonman

- Copyright: `Copyright 2018 The Charmonman Project Authors (https://github.com/cadsondemak/Charmonman)`
- `charmonman/regular.ttf`: `<base>ofl/charmonman/Charmonman-Regular.ttf`
- `charmonman/bold.ttf`: `<base>ofl/charmonman/Charmonman-Bold.ttf`
- `charmonman/OFL.txt`: `<base>ofl/charmonman/OFL.txt`

### Chathura

- Copyright: `Copyright 2009 The Chathura Project Authors (https://github.com/appajid/Chathura)`
- `chathura/regular.ttf`: `<base>ofl/chathura/Chathura-Regular.ttf`
- `chathura/bold.ttf`: `<base>ofl/chathura/Chathura-Bold.ttf`
- `chathura/OFL.txt`: `<base>ofl/chathura/OFL.txt`

### Chau Philomene One

- Copyright: `Copyright (c) 2010-2012, TipoType (produccion.taller@gmail.com www.tipotype.com), with Reserved Font Name "Chau Philomene"`
- `chauphilomeneone/regular.ttf`: `<base>ofl/chauphilomeneone/ChauPhilomeneOne-Regular.ttf`
- `chauphilomeneone/italic.ttf`: `<base>ofl/chauphilomeneone/ChauPhilomeneOne-Italic.ttf`
- `chauphilomeneone/OFL.txt`: `<base>ofl/chauphilomeneone/OFL.txt`

### Chela One

- Copyright: `Copyright (c) 2012, LatinoType (luciano@latinotype.com), with Reserved Font Names 'Chela'`
- `chelaone/regular.ttf`: `<base>ofl/chelaone/ChelaOne-Regular.ttf`
- `chelaone/OFL.txt`: `<base>ofl/chelaone/OFL.txt`

### Cherish

- Copyright: `Copyright 2004-2021 The Cherish Project Authors (https://github.com/googlefonts/cherish)`
- `cherish/regular.ttf`: `<base>ofl/cherish/Cherish-Regular.ttf`
- `cherish/OFL.txt`: `<base>ofl/cherish/OFL.txt`

### Cherry Bomb One

- Copyright: `Copyright 2019 The Cherry Bomb Project Authors (https://github.com/satsuyako/CherryBomb)`
- `cherrybombone/regular.ttf`: `<base>ofl/cherrybombone/CherryBombOne-Regular.ttf`
- `cherrybombone/OFL.txt`: `<base>ofl/cherrybombone/OFL.txt`

### Cherry Swash

- Copyright: `Copyright (c) 2012, Natalia Kasatkina (kasatkinanataliya@gmail.com)`
- `cherryswash/regular.ttf`: `<base>ofl/cherryswash/CherrySwash-Regular.ttf`
- `cherryswash/bold.ttf`: `<base>ofl/cherryswash/CherrySwash-Bold.ttf`
- `cherryswash/OFL.txt`: `<base>ofl/cherryswash/OFL.txt`

### Chilanka

- Copyright: `Copyright 2023 The Chilanka Project Authors (https://gitlab.com/smc/fonts/chilanka/)`
- `chilanka/regular.ttf`: `<base>ofl/chilanka/Chilanka-Regular.ttf`
- `chilanka/OFL.txt`: `<base>ofl/chilanka/OFL.txt`

### Chivo

- Copyright: `Copyright 2019 The Chivo Project Authors (https://github.com/Omnibus-Type/Chivo)`
- `chivo/regular.ttf`: `<base>ofl/chivo/Chivo%5Bwght%5D.ttf`
- `chivo/italic.ttf`: `<base>ofl/chivo/Chivo-Italic%5Bwght%5D.ttf`
- `chivo/OFL.txt`: `<base>ofl/chivo/OFL.txt`

### Chivo Mono

- Copyright: `Copyright 2019 The Chivo Project Authors (https://github.com/Omnibus-Type/Chivo)`
- `chivomono/regular.ttf`: `<base>ofl/chivomono/ChivoMono%5Bwght%5D.ttf`
- `chivomono/italic.ttf`: `<base>ofl/chivomono/ChivoMono-Italic%5Bwght%5D.ttf`
- `chivomono/OFL.txt`: `<base>ofl/chivomono/OFL.txt`

### Chokokutai

- Copyright: `Copyright 2020 The Chokokutai Project Authors (https://github.com/go108go/Chokokutai)`
- `chokokutai/regular.ttf`: `<base>ofl/chokokutai/Chokokutai-Regular.ttf`
- `chokokutai/OFL.txt`: `<base>ofl/chokokutai/OFL.txt`

### Chonburi

- Copyright: `Copyright (c) 2015, Cadson Demak (info@cadsondemak.com)`
- `chonburi/regular.ttf`: `<base>ofl/chonburi/Chonburi-Regular.ttf`
- `chonburi/OFL.txt`: `<base>ofl/chonburi/OFL.txt`

### Cinzel

- Copyright: `Copyright 2020 The Cinzel Project Authors (https://github.com/NDISCOVER/Cinzel)`
- `cinzel/regular.ttf`: `<base>ofl/cinzel/Cinzel%5Bwght%5D.ttf`
- `cinzel/OFL.txt`: `<base>ofl/cinzel/OFL.txt`

### Cinzel Decorative

- Copyright: `Copyright (c) 2012 Natanael Gama (info@ndiscovered.com), with Reserved Font Name 'Cinzel'`
- `cinzeldecorative/regular.ttf`: `<base>ofl/cinzeldecorative/CinzelDecorative-Regular.ttf`
- `cinzeldecorative/bold.ttf`: `<base>ofl/cinzeldecorative/CinzelDecorative-Bold.ttf`
- `cinzeldecorative/OFL.txt`: `<base>ofl/cinzeldecorative/OFL.txt`

### Clarity City

- Copyright: `Copyright 2019 The Clarity City Project Authors (https://github.com/googlefonts/clarity-city)`
- `claritycity/regular.ttf`: `<base>ofl/claritycity/ClarityCity%5Bwght%5D.ttf`
- `claritycity/italic.ttf`: `<base>ofl/claritycity/ClarityCity-Italic%5Bwght%5D.ttf`
- `claritycity/OFL.txt`: `<base>ofl/claritycity/OFL.txt`

### Clicker Script

- Copyright: `Copyright (c) 2012 by Brian J. Bonislawsky and Jim Lyles DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name "Mouse Memoirs"`
- `clickerscript/regular.ttf`: `<base>ofl/clickerscript/ClickerScript-Regular.ttf`
- `clickerscript/OFL.txt`: `<base>ofl/clickerscript/OFL.txt`

### Coiny

- Copyright: `Copyright 2015 Marcelo Magalhaes (marcelommp@gmail.com @marcelommp)`
- `coiny/regular.ttf`: `<base>ofl/coiny/Coiny-Regular.ttf`
- `coiny/OFL.txt`: `<base>ofl/coiny/OFL.txt`

### Combo

- Copyright: `Copyright (c) 2012, Eduardo Tunni (http://www.tipo.net.ar), with Reserved Font Name 'Combo'`
- `combo/regular.ttf`: `<base>ofl/combo/Combo-Regular.ttf`
- `combo/OFL.txt`: `<base>ofl/combo/OFL.txt`

### Comfortaa

- Copyright: `Copyright 2011 The Comfortaa Project Authors (https://github.com/alexeiva/comfortaa), with Reserved Font Name "Comfortaa".`
- `comfortaa/regular.ttf`: `<base>ofl/comfortaa/Comfortaa%5Bwght%5D.ttf`
- `comfortaa/OFL.txt`: `<base>ofl/comfortaa/OFL.txt`

### Comforter

- Copyright: `Copyright 2015 The Comforter Project Authors (https://github.com/googlefonts/comforter)`
- `comforter/regular.ttf`: `<base>ofl/comforter/Comforter-Regular.ttf`
- `comforter/OFL.txt`: `<base>ofl/comforter/OFL.txt`

### Comforter Brush

- Copyright: `Copyright 2015 The Comforter Brush Project Authors (https://github.com/googlefonts/comforter-brush)`
- `comforterbrush/regular.ttf`: `<base>ofl/comforterbrush/ComforterBrush-Regular.ttf`
- `comforterbrush/OFL.txt`: `<base>ofl/comforterbrush/OFL.txt`

### Comic Neue

- Copyright: `Copyright 2014 The Comic Neue Project Authors (https://github.com/crozynski/comicneue)`
- `comicneue/regular.ttf`: `<base>ofl/comicneue/ComicNeue-Regular.ttf`
- `comicneue/bold.ttf`: `<base>ofl/comicneue/ComicNeue-Bold.ttf`
- `comicneue/italic.ttf`: `<base>ofl/comicneue/ComicNeue-Italic.ttf`
- `comicneue/bold-italic.ttf`: `<base>ofl/comicneue/ComicNeue-BoldItalic.ttf`
- `comicneue/OFL.txt`: `<base>ofl/comicneue/OFL.txt`

### Comic Relief

- Copyright: `Copyright 2013 The Comic Relief Project Authors (https://github.com/loudifier/Comic-Relief)`
- `comicrelief/regular.ttf`: `<base>ofl/comicrelief/ComicRelief-Regular.ttf`
- `comicrelief/bold.ttf`: `<base>ofl/comicrelief/ComicRelief-Bold.ttf`
- `comicrelief/OFL.txt`: `<base>ofl/comicrelief/OFL.txt`

### Comme

- Copyright: `Copyright 2014 The Comme Project Authors (https://github.com/googlefonts/comme)`
- `comme/regular.ttf`: `<base>ofl/comme/Comme%5Bwght%5D.ttf`
- `comme/OFL.txt`: `<base>ofl/comme/OFL.txt`

### Commissioner

- Copyright: `Copyright 2019 The Commissioner Project Authors (https://github.com/kosbarts/Commissioner)`
- `commissioner/regular.ttf`: `<base>ofl/commissioner/Commissioner%5BFLAR%2CVOLM%2Cslnt%2Cwght%5D.ttf`
- `commissioner/OFL.txt`: `<base>ofl/commissioner/OFL.txt`

### Coral Pixels

- Copyright: `Copyright 2024 The Coral Pixels Project Authors (https://github.com/tanukifont/Coral-Pixels)`
- `coralpixels/regular.ttf`: `<base>ofl/coralpixels/CoralPixels-Regular.ttf`
- `coralpixels/OFL.txt`: `<base>ofl/coralpixels/OFL.txt`

### Corinthia

- Copyright: `Copyright 2010 The Corinthia Project Authors (https://github.com/googlefonts/corinthia)`
- `corinthia/regular.ttf`: `<base>ofl/corinthia/Corinthia-Regular.ttf`
- `corinthia/bold.ttf`: `<base>ofl/corinthia/Corinthia-Bold.ttf`
- `corinthia/OFL.txt`: `<base>ofl/corinthia/OFL.txt`

### Cormorant

- Copyright: `Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorant/regular.ttf`: `<base>ofl/cormorant/Cormorant%5Bwght%5D.ttf`
- `cormorant/italic.ttf`: `<base>ofl/cormorant/Cormorant-Italic%5Bwght%5D.ttf`
- `cormorant/OFL.txt`: `<base>ofl/cormorant/OFL.txt`

### Cormorant Garamond

- Copyright: `Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorantgaramond/regular.ttf`: `<base>ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf`
- `cormorantgaramond/italic.ttf`: `<base>ofl/cormorantgaramond/CormorantGaramond-Italic%5Bwght%5D.ttf`
- `cormorantgaramond/OFL.txt`: `<base>ofl/cormorantgaramond/OFL.txt`

### Cormorant Infant

- Copyright: `Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorantinfant/regular.ttf`: `<base>ofl/cormorantinfant/CormorantInfant%5Bwght%5D.ttf`
- `cormorantinfant/italic.ttf`: `<base>ofl/cormorantinfant/CormorantInfant-Italic%5Bwght%5D.ttf`
- `cormorantinfant/OFL.txt`: `<base>ofl/cormorantinfant/OFL.txt`

### Cormorant SC

- Copyright: `Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorantsc/regular.ttf`: `<base>ofl/cormorantsc/CormorantSC-Regular.ttf`
- `cormorantsc/bold.ttf`: `<base>ofl/cormorantsc/CormorantSC-Bold.ttf`
- `cormorantsc/OFL.txt`: `<base>ofl/cormorantsc/OFL.txt`

### Cormorant Unicase

- Copyright: `Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorantunicase/regular.ttf`: `<base>ofl/cormorantunicase/CormorantUnicase-Regular.ttf`
- `cormorantunicase/bold.ttf`: `<base>ofl/cormorantunicase/CormorantUnicase-Bold.ttf`
- `cormorantunicase/OFL.txt`: `<base>ofl/cormorantunicase/OFL.txt`

### Cormorant Upright

- Copyright: `Copyright (c) 2015, Christian Thalmann and the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)`
- `cormorantupright/regular.ttf`: `<base>ofl/cormorantupright/CormorantUpright-Regular.ttf`
- `cormorantupright/bold.ttf`: `<base>ofl/cormorantupright/CormorantUpright-Bold.ttf`
- `cormorantupright/OFL.txt`: `<base>ofl/cormorantupright/OFL.txt`

### Cossette Texte

- Copyright: `Copyright 2025 The Cossette Project Authors (https://github.com/googlefonts/cossette-fonts)`
- `cossettetexte/regular.ttf`: `<base>ofl/cossettetexte/CossetteTexte-Regular.ttf`
- `cossettetexte/bold.ttf`: `<base>ofl/cossettetexte/CossetteTexte-Bold.ttf`
- `cossettetexte/OFL.txt`: `<base>ofl/cossettetexte/OFL.txt`

### Cossette Titre

- Copyright: `Copyright 2025 The Cossette Project Authors (https://github.com/googlefonts/cossette-fonts)`
- `cossettetitre/regular.ttf`: `<base>ofl/cossettetitre/CossetteTitre-Regular.ttf`
- `cossettetitre/bold.ttf`: `<base>ofl/cossettetitre/CossetteTitre-Bold.ttf`
- `cossettetitre/OFL.txt`: `<base>ofl/cossettetitre/OFL.txt`

### Courgette

- Copyright: `Copyright (c) 2012 by Sorkin Type Co (www.sorkintype.com), with Reserved Font Name "Courgette".`
- `courgette/regular.ttf`: `<base>ofl/courgette/Courgette-Regular.ttf`
- `courgette/OFL.txt`: `<base>ofl/courgette/OFL.txt`

### Courier Prime

- Copyright: `Copyright 2015 The Courier Prime Project Authors (https://github.com/quoteunquoteapps/CourierPrime).`
- `courierprime/regular.ttf`: `<base>ofl/courierprime/CourierPrime-Regular.ttf`
- `courierprime/bold.ttf`: `<base>ofl/courierprime/CourierPrime-Bold.ttf`
- `courierprime/italic.ttf`: `<base>ofl/courierprime/CourierPrime-Italic.ttf`
- `courierprime/bold-italic.ttf`: `<base>ofl/courierprime/CourierPrime-BoldItalic.ttf`
- `courierprime/OFL.txt`: `<base>ofl/courierprime/OFL.txt`

### Cousine

- Copyright: `Copyright 2026 The Cousine Project Authors (https://github.com/googlefonts/cousine)`
- `cousine/regular.ttf`: `<base>ofl/cousine/Cousine-Regular.ttf`
- `cousine/bold.ttf`: `<base>ofl/cousine/Cousine-Bold.ttf`
- `cousine/italic.ttf`: `<base>ofl/cousine/Cousine-Italic.ttf`
- `cousine/bold-italic.ttf`: `<base>ofl/cousine/Cousine-BoldItalic.ttf`
- `cousine/OFL.txt`: `<base>ofl/cousine/OFL.txt`

### Coustard

- Copyright: `Copyright 2011 The Coustard Project Authors (https://github.com/googlefonts/coustardFont)`
- `coustard/regular.ttf`: `<base>ofl/coustard/Coustard-Regular.ttf`
- `coustard/OFL.txt`: `<base>ofl/coustard/OFL.txt`

### Covered By Your Grace

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `coveredbyyourgrace/regular.ttf`: `<base>ofl/coveredbyyourgrace/CoveredByYourGrace.ttf`
- `coveredbyyourgrace/OFL.txt`: `<base>ofl/coveredbyyourgrace/OFL.txt`

### Crimson Pro

- Copyright: `Copyright 2018 The Crimson Pro Project Authors (https://github.com/Fonthausen/CrimsonPro)`
- `crimsonpro/regular.ttf`: `<base>ofl/crimsonpro/CrimsonPro%5Bwght%5D.ttf`
- `crimsonpro/italic.ttf`: `<base>ofl/crimsonpro/CrimsonPro-Italic%5Bwght%5D.ttf`
- `crimsonpro/OFL.txt`: `<base>ofl/crimsonpro/OFL.txt`

### Crimson Text

- Copyright: `Copyright 2010 The Crimson Text Project Authors (https://github.com/googlefonts/Crimson)`
- `crimsontext/regular.ttf`: `<base>ofl/crimsontext/CrimsonText-Regular.ttf`
- `crimsontext/bold.ttf`: `<base>ofl/crimsontext/CrimsonText-Bold.ttf`
- `crimsontext/italic.ttf`: `<base>ofl/crimsontext/CrimsonText-Italic.ttf`
- `crimsontext/bold-italic.ttf`: `<base>ofl/crimsontext/CrimsonText-BoldItalic.ttf`
- `crimsontext/OFL.txt`: `<base>ofl/crimsontext/OFL.txt`

### Croissant One

- Copyright: `Copyright (c) 2012, Eduardo Tunni (http://www.tipo.net.ar), with Reserved Font Name 'Croissant'`
- `croissantone/regular.ttf`: `<base>ofl/croissantone/CroissantOne-Regular.ttf`
- `croissantone/OFL.txt`: `<base>ofl/croissantone/OFL.txt`

### Cuprum

- Copyright: `Copyright 2020 The Cuprum Project Authors (https://github.com/alexeiva/cuprum), with Reserved Font Name "Cuprum".; Copyright (c) 2006-2012 by Jovanny Lemonad (jovanny.ru), with Reserved Font Name "Cuprum"`
- `cuprum/regular.ttf`: `<base>ofl/cuprum/Cuprum%5Bwght%5D.ttf`
- `cuprum/italic.ttf`: `<base>ofl/cuprum/Cuprum-Italic%5Bwght%5D.ttf`
- `cuprum/OFL.txt`: `<base>ofl/cuprum/OFL.txt`

### Cute Font

- Copyright: `Copyright 2018 The Cute Font Project Authors`
- `cutefont/regular.ttf`: `<base>ofl/cutefont/CuteFont-Regular.ttf`
- `cutefont/OFL.txt`: `<base>ofl/cutefont/OFL.txt`

### Cutive

- Copyright: `Copyright 2012 The Cutive Project Authors (https://github.com/googlefonts/CutiveFont), with Reserved Font Names "Cutive"`
- `cutive/regular.ttf`: `<base>ofl/cutive/Cutive-Regular.ttf`
- `cutive/OFL.txt`: `<base>ofl/cutive/OFL.txt`

### Cutive Mono

- Copyright: `Copyright 2012 The Cutive Project Authors (https://github.com/googlefonts/cutivemono)`
- `cutivemono/regular.ttf`: `<base>ofl/cutivemono/CutiveMono-Regular.ttf`
- `cutivemono/OFL.txt`: `<base>ofl/cutivemono/OFL.txt`

### Damion

- Copyright: `Copyright 2014 The Damion Project Authors (https://github.com/googlefonts/damionFont)`
- `damion/regular.ttf`: `<base>ofl/damion/Damion-Regular.ttf`
- `damion/OFL.txt`: `<base>ofl/damion/OFL.txt`

### Dancing Script

- Copyright: `Copyright 2016 The Dancing Script Project Authors (https://github.com/googlefonts/DancingScript), with Reserved Font Name 'Dancing Script'.`
- `dancingscript/regular.ttf`: `<base>ofl/dancingscript/DancingScript%5Bwght%5D.ttf`
- `dancingscript/OFL.txt`: `<base>ofl/dancingscript/OFL.txt`

### Danfo

- Copyright: `Copyright 2023 The Danfo Project Authors (https://github.com/Afrotype/danfo)`
- `danfo/regular.ttf`: `<base>ofl/danfo/Danfo%5BELSH%5D.ttf`
- `danfo/OFL.txt`: `<base>ofl/danfo/OFL.txt`

### Dangrek

- Copyright: `Copyright 2020 The Dangrek Project Authors (https://github.com/danhhong/Dangrek)`
- `dangrek/regular.ttf`: `<base>ofl/dangrek/Dangrek-Regular.ttf`
- `dangrek/OFL.txt`: `<base>ofl/dangrek/OFL.txt`

### Darker Grotesque

- Copyright: `Copyright 2019 The Darker Grotesque Project Authors (https://github.com/bettergui/DarkerGrotesque)`
- `darkergrotesque/regular.ttf`: `<base>ofl/darkergrotesque/DarkerGrotesque%5Bwght%5D.ttf`
- `darkergrotesque/OFL.txt`: `<base>ofl/darkergrotesque/OFL.txt`

### Darumadrop One

- Copyright: `Copyright 2020 The Darumadrop One Project Authors (https://github.com/ManiackersDesign/darumadrop)`
- `darumadropone/regular.ttf`: `<base>ofl/darumadropone/DarumadropOne-Regular.ttf`
- `darumadropone/OFL.txt`: `<base>ofl/darumadropone/OFL.txt`

### David Libre

- Copyright: `Copyright 2016 The David Libre Project Authors (https://github.com/meirsadan/david-libre), with reserved font name "Hadash", "Gentium" and 'SIL'.`
- `davidlibre/regular.ttf`: `<base>ofl/davidlibre/DavidLibre-Regular.ttf`
- `davidlibre/bold.ttf`: `<base>ofl/davidlibre/DavidLibre-Bold.ttf`
- `davidlibre/OFL.txt`: `<base>ofl/davidlibre/OFL.txt`

### Dekko

- Copyright: `Copyright (c) 2000, Modular Infotech, Pune, INDIA. Copyright (c) 2014, Sorkin Type Co, Boston, MA, USA (www.sorkintype.com)`
- `dekko/regular.ttf`: `<base>ofl/dekko/Dekko-Regular.ttf`
- `dekko/OFL.txt`: `<base>ofl/dekko/OFL.txt`

### Delicious Handrawn

- Copyright: `Copyright 2022 The Delicious Handrawn Project Authors (https://github.com/alphArtype/Delicious-Handrawn)`
- `delicioushandrawn/regular.ttf`: `<base>ofl/delicioushandrawn/DeliciousHandrawn-Regular.ttf`
- `delicioushandrawn/OFL.txt`: `<base>ofl/delicioushandrawn/OFL.txt`

### Denk One

- Copyright: `Copyright 2012 The Denk One Project Authors (https://github.com/SorkinType/Voltaire) with Reserved Font Name 'Denk'.`
- `denkone/regular.ttf`: `<base>ofl/denkone/DenkOne-Regular.ttf`
- `denkone/OFL.txt`: `<base>ofl/denkone/OFL.txt`

### Dhurjati

- Copyright: `Copyright (c) 2012 Andhrapradesh Society for Knowledge Networks (fonts.siliconandhra.org)`
- `dhurjati/regular.ttf`: `<base>ofl/dhurjati/Dhurjati-Regular.ttf`
- `dhurjati/OFL.txt`: `<base>ofl/dhurjati/OFL.txt`

### Dhyana

- Copyright: `Copyright (c) 2010-12, Vernon Adams (vern@newtypography.co.uk)`
- `dhyana/regular.ttf`: `<base>ofl/dhyana/Dhyana-Regular.ttf`
- `dhyana/bold.ttf`: `<base>ofl/dhyana/Dhyana-Bold.ttf`
- `dhyana/OFL.txt`: `<base>ofl/dhyana/OFL.txt`

### Digital Numbers

- Copyright: `Copyright (c) 2015, Stephan Ahlf (https://github.com/s-a/digital-numbers-font stephan.ahlf@googlemail.com)`
- `digitalnumbers/regular.ttf`: `<base>ofl/digitalnumbers/DigitalNumbers-Regular.ttf`
- `digitalnumbers/OFL.txt`: `<base>ofl/digitalnumbers/OFL.txt`

### Diphylleia

- Copyright: `Copyright 2022 The Diphylleia Project Authors (https://github.com/JAMO-TYPEFACE/Diphylleia)`
- `diphylleia/regular.ttf`: `<base>ofl/diphylleia/Diphylleia-Regular.ttf`
- `diphylleia/OFL.txt`: `<base>ofl/diphylleia/OFL.txt`

### Diplomata

- Copyright: `Copyright 2011 The Diplomata Project Authors (https://github.com/etunni/diplomata), with Reserved Font Name "Diplomata"`
- `diplomata/regular.ttf`: `<base>ofl/diplomata/Diplomata-Regular.ttf`
- `diplomata/OFL.txt`: `<base>ofl/diplomata/OFL.txt`

### Diplomata SC

- Copyright: `Copyright 2011 The Diplomata Project Authors (https://github.com/etunni/diplomata), with Reserved Font Name "Diplomata"`
- `diplomatasc/regular.ttf`: `<base>ofl/diplomatasc/DiplomataSC-Regular.ttf`
- `diplomatasc/OFL.txt`: `<base>ofl/diplomatasc/OFL.txt`

### DM Mono

- Copyright: `Copyright 2020 The DM Mono Project Authors (https://www.github.com/googlefonts/dm-mono)`
- `dmmono/regular.ttf`: `<base>ofl/dmmono/DMMono-Regular.ttf`
- `dmmono/italic.ttf`: `<base>ofl/dmmono/DMMono-Italic.ttf`
- `dmmono/OFL.txt`: `<base>ofl/dmmono/OFL.txt`

### DM Sans

- Copyright: `Copyright 2014 The DM Sans Project Authors (https://github.com/googlefonts/dm-fonts)`
- `dmsans/regular.ttf`: `<base>ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf`
- `dmsans/italic.ttf`: `<base>ofl/dmsans/DMSans-Italic%5Bopsz%2Cwght%5D.ttf`
- `dmsans/OFL.txt`: `<base>ofl/dmsans/OFL.txt`

### DM Serif Display

- Copyright: `Copyright 2014-2018 Adobe (http://www.adobe.com/), with Reserved Font Name 'Source'. All Rights Reserved. Source is a trademark of Adobe in the United States and/or other countries. Copyright 2019 Google LLC.`
- `dmserifdisplay/regular.ttf`: `<base>ofl/dmserifdisplay/DMSerifDisplay-Regular.ttf`
- `dmserifdisplay/italic.ttf`: `<base>ofl/dmserifdisplay/DMSerifDisplay-Italic.ttf`
- `dmserifdisplay/OFL.txt`: `<base>ofl/dmserifdisplay/OFL.txt`

### DM Serif Text

- Copyright: `Copyright 2014-2018 Adobe (http://www.adobe.com/), with Reserved Font Name 'Source'. All Rights Reserved. Source is a trademark of Adobe in the United States and/or other countries. Copyright 2019 Google LLC.`
- `dmseriftext/regular.ttf`: `<base>ofl/dmseriftext/DMSerifText-Regular.ttf`
- `dmseriftext/italic.ttf`: `<base>ofl/dmseriftext/DMSerifText-Italic.ttf`
- `dmseriftext/OFL.txt`: `<base>ofl/dmseriftext/OFL.txt`

### Do Hyeon

- Copyright: `Copyright 2018 The Do Hyeon Project Authors`
- `dohyeon/regular.ttf`: `<base>ofl/dohyeon/DoHyeon-Regular.ttf`
- `dohyeon/OFL.txt`: `<base>ofl/dohyeon/OFL.txt`

### Dokdo

- Copyright: `Copyright (c) 2005-2017 FONTRIX. All Rights Reserved.`
- `dokdo/regular.ttf`: `<base>ofl/dokdo/Dokdo-Regular.ttf`
- `dokdo/OFL.txt`: `<base>ofl/dokdo/OFL.txt`

### Domine

- Copyright: `Copyright 2020 The Domine Project Authors (https://github.com/googlefonts/domine); Copyright (c) 2012, Pablo Impallari (www.impallari.com|impallari@gmail.com),; Copyright (c) 2012, Pablo Impallari (www.impallari.com|impallari@gmail.com),; Copyright (c) 2012, Rodrigo Fuenzalida (www.rfuenzalida.com|hello@rfuenzalida.com),; Copyright (c) 2012, Brenda Gallo (gbrenda1987@gmail.com), with Reserved Font Name Domine.`
- `domine/regular.ttf`: `<base>ofl/domine/Domine%5Bwght%5D.ttf`
- `domine/OFL.txt`: `<base>ofl/domine/OFL.txt`

### Dosis

- Copyright: `Copyright 2011 The Dosis Project Authors (https://github.com/googlefonts/dosis-vf)`
- `dosis/regular.ttf`: `<base>ofl/dosis/Dosis%5Bwght%5D.ttf`
- `dosis/OFL.txt`: `<base>ofl/dosis/OFL.txt`

### DotGothic16

- Copyright: `Copyright 2020 The DotGothic16 Project Authors (https://github.com/fontworks-fonts/DotGothic16)`
- `dotgothic16/regular.ttf`: `<base>ofl/dotgothic16/DotGothic16-Regular.ttf`
- `dotgothic16/OFL.txt`: `<base>ofl/dotgothic16/OFL.txt`

### Doto

- Copyright: `Copyright 2024 The Doto Project Authors (https://github.com/oliverlalan/Doto)`
- `doto/regular.ttf`: `<base>ofl/doto/Doto%5BROND%2Cwght%5D.ttf`
- `doto/OFL.txt`: `<base>ofl/doto/OFL.txt`

### Eagle Lake

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Names "Eagle Lake"`
- `eaglelake/regular.ttf`: `<base>ofl/eaglelake/EagleLake-Regular.ttf`
- `eaglelake/OFL.txt`: `<base>ofl/eaglelake/OFL.txt`

### EB Garamond

- Copyright: `Copyright 2017 The EB Garamond Project Authors (https://github.com/octaviopardo/EBGaramond12)`
- `ebgaramond/regular.ttf`: `<base>ofl/ebgaramond/EBGaramond%5Bwght%5D.ttf`
- `ebgaramond/italic.ttf`: `<base>ofl/ebgaramond/EBGaramond-Italic%5Bwght%5D.ttf`
- `ebgaramond/OFL.txt`: `<base>ofl/ebgaramond/OFL.txt`

### Eczar

- Copyright: `Copyright 2014 The Eczar Project Authors (https://github.com/rosettatype/eczar)`
- `eczar/regular.ttf`: `<base>ofl/eczar/Eczar%5Bwght%5D.ttf`
- `eczar/OFL.txt`: `<base>ofl/eczar/OFL.txt`

### Edu AU VIC WA NT Arrows

- Copyright: `Copyright 2023 The VIC WA NT School Hand Australia Project Authors (https://github.com/SorkinType/VICWANTSchoolhandAustralia)`
- `eduauvicwantarrows/regular.ttf`: `<base>ofl/eduauvicwantarrows/EduAUVICWANTArrows%5Bwght%5D.ttf`
- `eduauvicwantarrows/OFL.txt`: `<base>ofl/eduauvicwantarrows/OFL.txt`

### Edu AU VIC WA NT Dots

- Copyright: `Copyright 2023 The VIC WA NT School Hand Australia Project Authors (https://github.com/SorkinType/VICWANTSchoolhandAustralia)`
- `eduauvicwantdots/regular.ttf`: `<base>ofl/eduauvicwantdots/EduAUVICWANTDots%5Bwght%5D.ttf`
- `eduauvicwantdots/OFL.txt`: `<base>ofl/eduauvicwantdots/OFL.txt`

### Edu AU VIC WA NT Guides

- Copyright: `Copyright 2023 The VIC WA NT School Hand Australia Project Authors (https://github.com/SorkinType/VICWANTSchoolhandAustralia)`
- `eduauvicwantguides/regular.ttf`: `<base>ofl/eduauvicwantguides/EduAUVICWANTGuides%5Bwght%5D.ttf`
- `eduauvicwantguides/OFL.txt`: `<base>ofl/eduauvicwantguides/OFL.txt`

### Edu AU VIC WA NT Hand

- Copyright: `Copyright 2023 The VIC WA NT School Hand Australia Project Authors (https://github.com/SorkinType/VICWANTSchoolhandAustralia)`
- `eduauvicwanthand/regular.ttf`: `<base>ofl/eduauvicwanthand/EduAUVICWANTHand%5Bwght%5D.ttf`
- `eduauvicwanthand/OFL.txt`: `<base>ofl/eduauvicwanthand/OFL.txt`

### Edu AU VIC WA NT Pre

- Copyright: `Copyright 2023 The VIC WA NT School Hand Australia Project Authors (https://github.com/SorkinType/VICWANTSchoolhandAustralia)`
- `eduauvicwantpre/regular.ttf`: `<base>ofl/eduauvicwantpre/EduAUVICWANTPre%5Bwght%5D.ttf`
- `eduauvicwantpre/OFL.txt`: `<base>ofl/eduauvicwantpre/OFL.txt`

### Edu NSW ACT Foundation

- Copyright: `Copyright 2022 The AU School Handwriting Fonts Project Authors (https://github.com/MezMerrit/AU-School-Handwriting-Fonts)`
- `edunswactfoundation/regular.ttf`: `<base>ofl/edunswactfoundation/EduNSWACTFoundation%5Bwght%5D.ttf`
- `edunswactfoundation/OFL.txt`: `<base>ofl/edunswactfoundation/OFL.txt`

### Edu QLD Beginner

- Copyright: `Copyright 2022 The AU School Handwriting Fonts Project Authors (https://github.com/MezMerrit/AU-School-Handwriting-Fonts)`
- `eduqldbeginner/regular.ttf`: `<base>ofl/eduqldbeginner/EduQLDBeginner%5Bwght%5D.ttf`
- `eduqldbeginner/OFL.txt`: `<base>ofl/eduqldbeginner/OFL.txt`

### Edu SA Beginner

- Copyright: `Copyright 2022 The AU School Handwriting Fonts Project Authors (https://github.com/MezMerrit/AU-School-Handwriting-Fonts)`
- `edusabeginner/regular.ttf`: `<base>ofl/edusabeginner/EduSABeginner%5Bwght%5D.ttf`
- `edusabeginner/OFL.txt`: `<base>ofl/edusabeginner/OFL.txt`

### Edu TAS Beginner

- Copyright: `Copyright 2022 The AU School Handwriting Fonts Project Authors (https://github.com/MezMerrit/AU-School-Handwriting-Fonts)`
- `edutasbeginner/regular.ttf`: `<base>ofl/edutasbeginner/EduTASBeginner%5Bwght%5D.ttf`
- `edutasbeginner/OFL.txt`: `<base>ofl/edutasbeginner/OFL.txt`

### Edu VIC WA NT Beginner

- Copyright: `Copyright 2022 The AU School Handwriting Fonts Project Authors (https://github.com/MezMerrit/AU-School-Handwriting-Fonts)`
- `eduvicwantbeginner/regular.ttf`: `<base>ofl/eduvicwantbeginner/EduVICWANTBeginner%5Bwght%5D.ttf`
- `eduvicwantbeginner/OFL.txt`: `<base>ofl/eduvicwantbeginner/OFL.txt`

### Ek Mukta

- Copyright: `Copyright (c) 2014, Girish Dalvi, Ek Type. All rights reserved.`
- `ekmukta/regular.ttf`: `<base>ofl/ekmukta/EkMukta-Regular.ttf`
- `ekmukta/bold.ttf`: `<base>ofl/ekmukta/EkMukta-Bold.ttf`
- `ekmukta/OFL.txt`: `<base>ofl/ekmukta/OFL.txt`

### El Messiri

- Copyright: `Copyright 2015 The El Messiri Project Authors (https://github.com/Gue3bara/El-Messiri)`
- `elmessiri/regular.ttf`: `<base>ofl/elmessiri/ElMessiri%5Bwght%5D.ttf`
- `elmessiri/OFL.txt`: `<base>ofl/elmessiri/OFL.txt`

### Elms Sans

- Copyright: `Copyright 2025 The Elms Sans Project Authors (https://github.com/mara-aa/elms-sans.git)`
- `elmssans/regular.ttf`: `<base>ofl/elmssans/ElmsSans%5Bwght%5D.ttf`
- `elmssans/italic.ttf`: `<base>ofl/elmssans/ElmsSans-Italic%5Bwght%5D.ttf`
- `elmssans/OFL.txt`: `<base>ofl/elmssans/OFL.txt`

### Elsie

- Copyright: `Copyright (c) 2010-2012, Alejandro Inler (alejandroinler@gmail.com), with Reserved Font Name 'Elsie'`
- `elsie/regular.ttf`: `<base>ofl/elsie/Elsie-Regular.ttf`
- `elsie/OFL.txt`: `<base>ofl/elsie/OFL.txt`

### Elsie Swash Caps

- Copyright: `Copyright (c) 2010-2012, Alejandro Inler (alejandroinler@gmail.com), with Reserved Font Name 'Elsie'`
- `elsieswashcaps/regular.ttf`: `<base>ofl/elsieswashcaps/ElsieSwashCaps-Regular.ttf`
- `elsieswashcaps/OFL.txt`: `<base>ofl/elsieswashcaps/OFL.txt`

### Encode Sans

- Copyright: `Copyright 2020 The Encode Project Authors (https://github.com/thundernixon/Encode-Sans), with Reserved Font Name "Encode Sans”.`
- `encodesans/regular.ttf`: `<base>ofl/encodesans/EncodeSans%5Bwdth%2Cwght%5D.ttf`
- `encodesans/OFL.txt`: `<base>ofl/encodesans/OFL.txt`

### Encode Sans Condensed

- Copyright: `Copyright 2012 The Encode Project Authors (impallari@gmail.com), with Reserved Font Name "Encode Sans”.`
- `encodesanscondensed/regular.ttf`: `<base>ofl/encodesanscondensed/EncodeSansCondensed-Regular.ttf`
- `encodesanscondensed/bold.ttf`: `<base>ofl/encodesanscondensed/EncodeSansCondensed-Bold.ttf`
- `encodesanscondensed/OFL.txt`: `<base>ofl/encodesanscondensed/OFL.txt`

### Encode Sans Expanded

- Copyright: `Copyright 2012 The Encode Project Authors (impallari@gmail.com), with Reserved Font Name "Encode Sans”.`
- `encodesansexpanded/regular.ttf`: `<base>ofl/encodesansexpanded/EncodeSansExpanded-Regular.ttf`
- `encodesansexpanded/bold.ttf`: `<base>ofl/encodesansexpanded/EncodeSansExpanded-Bold.ttf`
- `encodesansexpanded/OFL.txt`: `<base>ofl/encodesansexpanded/OFL.txt`

### Encode Sans SC

- Copyright: `Copyright 2020 The Encode Project Authors (https://github.com/thundernixon/Encode-Sans), with Reserved Font Name "Encode Sans”.`
- `encodesanssc/regular.ttf`: `<base>ofl/encodesanssc/EncodeSansSC%5Bwdth%2Cwght%5D.ttf`
- `encodesanssc/OFL.txt`: `<base>ofl/encodesanssc/OFL.txt`

### Encode Sans Semi Condensed

- Copyright: `Copyright 2012 The Encode Project Authors (impallari@gmail.com), with Reserved Font Name "Encode Sans”.`
- `encodesanssemicondensed/regular.ttf`: `<base>ofl/encodesanssemicondensed/EncodeSansSemiCondensed-Regular.ttf`
- `encodesanssemicondensed/bold.ttf`: `<base>ofl/encodesanssemicondensed/EncodeSansSemiCondensed-Bold.ttf`
- `encodesanssemicondensed/OFL.txt`: `<base>ofl/encodesanssemicondensed/OFL.txt`

### Encode Sans Semi Expanded

- Copyright: `Copyright 2012 The Encode Project Authors (impallari@gmail.com), with Reserved Font Name "Encode Sans”.`
- `encodesanssemiexpanded/regular.ttf`: `<base>ofl/encodesanssemiexpanded/EncodeSansSemiExpanded-Regular.ttf`
- `encodesanssemiexpanded/bold.ttf`: `<base>ofl/encodesanssemiexpanded/EncodeSansSemiExpanded-Bold.ttf`
- `encodesanssemiexpanded/OFL.txt`: `<base>ofl/encodesanssemiexpanded/OFL.txt`

### Englebert

- Copyright: `Copyright 2012 The Englebert Project Authors (https://github.com/librefonts/englebert)`
- `englebert/regular.ttf`: `<base>ofl/englebert/Englebert-Regular.ttf`
- `englebert/OFL.txt`: `<base>ofl/englebert/OFL.txt`

### Ephesis

- Copyright: `Copyright 2004-2021 The Ephesis Project Authors (https://github.com/googlefonts/ephesis)`
- `ephesis/regular.ttf`: `<base>ofl/ephesis/Ephesis-Regular.ttf`
- `ephesis/OFL.txt`: `<base>ofl/ephesis/OFL.txt`

### Epilogue

- Copyright: `Copyright 2020 The Epilogue Project Authors (https://github.com/Etcetera-Type-Co/Epilogue)`
- `epilogue/regular.ttf`: `<base>ofl/epilogue/Epilogue%5Bwght%5D.ttf`
- `epilogue/italic.ttf`: `<base>ofl/epilogue/Epilogue-Italic%5Bwght%5D.ttf`
- `epilogue/OFL.txt`: `<base>ofl/epilogue/OFL.txt`

### Epunda Sans

- Copyright: `Copyright 2024 The Epunda Sans Project Authors (https://github.com/typofactur/epundasans.git)`
- `epundasans/regular.ttf`: `<base>ofl/epundasans/EpundaSans%5Bwght%5D.ttf`
- `epundasans/italic.ttf`: `<base>ofl/epundasans/EpundaSans-Italic%5Bwght%5D.ttf`
- `epundasans/OFL.txt`: `<base>ofl/epundasans/OFL.txt`

### Epunda Slab

- Copyright: `Copyright 2023 The Epunda Slab Project Authors (https://github.com/typofactur/epundaslab.git)`
- `epundaslab/regular.ttf`: `<base>ofl/epundaslab/EpundaSlab%5Bwght%5D.ttf`
- `epundaslab/italic.ttf`: `<base>ofl/epundaslab/EpundaSlab-Italic%5Bwght%5D.ttf`
- `epundaslab/OFL.txt`: `<base>ofl/epundaslab/OFL.txt`

### Estedad

- Copyright: `Copyright 2022 The Estedad Project Authors (https://github.com/aminabedi68/Estedad)`
- `estedad/regular.ttf`: `<base>ofl/estedad/Estedad%5Bwght%5D.ttf`
- `estedad/OFL.txt`: `<base>ofl/estedad/OFL.txt`

### Estonia

- Copyright: `Copyright 2010-2021 The Estonia Project Authors (https://github.com/googlefonts/estonia)`
- `estonia/regular.ttf`: `<base>ofl/estonia/Estonia-Regular.ttf`
- `estonia/OFL.txt`: `<base>ofl/estonia/OFL.txt`

### Exo

- Copyright: `Copyright 2017 The Exo Project Authors (https://github.com/NDISCOVER/Exo-1.0)`
- `exo/regular.ttf`: `<base>ofl/exo/Exo%5Bwght%5D.ttf`
- `exo/italic.ttf`: `<base>ofl/exo/Exo-Italic%5Bwght%5D.ttf`
- `exo/OFL.txt`: `<base>ofl/exo/OFL.txt`

### Exo 2

- Copyright: `Copyright 2013 The Exo 2 Project Authors (https://github.com/googlefonts/Exo-2.0)`
- `exo2/regular.ttf`: `<base>ofl/exo2/Exo2%5Bwght%5D.ttf`
- `exo2/italic.ttf`: `<base>ofl/exo2/Exo2-Italic%5Bwght%5D.ttf`
- `exo2/OFL.txt`: `<base>ofl/exo2/OFL.txt`

### Expletus Sans

- Copyright: `Copyright 2018 The Expletus Sans Project Authors (https://github.com/googlefonts/Expletus-Sans)`
- `expletussans/regular.ttf`: `<base>ofl/expletussans/ExpletusSans%5Bwght%5D.ttf`
- `expletussans/italic.ttf`: `<base>ofl/expletussans/ExpletusSans-Italic%5Bwght%5D.ttf`
- `expletussans/OFL.txt`: `<base>ofl/expletussans/OFL.txt`

### Explora

- Copyright: `Copyright 2011 The Explora Project Authors (https://github.com/googlefonts/explora)`
- `explora/regular.ttf`: `<base>ofl/explora/Explora-Regular.ttf`
- `explora/OFL.txt`: `<base>ofl/explora/OFL.txt`

### Faculty Glyphic

- Copyright: `Copyright 2024 The Faculty Glyphic Project Authors (https://github.com/DylanYoungKoto/FacultyGlyphic)`
- `facultyglyphic/regular.ttf`: `<base>ofl/facultyglyphic/FacultyGlyphic-Regular.ttf`
- `facultyglyphic/OFL.txt`: `<base>ofl/facultyglyphic/OFL.txt`

### Fahkwang

- Copyright: `Copyright 2018 The Fahkwang Project Authors (https://github.com/cadsondemak/Fah-Kwang)`
- `fahkwang/regular.ttf`: `<base>ofl/fahkwang/Fahkwang-Regular.ttf`
- `fahkwang/bold.ttf`: `<base>ofl/fahkwang/Fahkwang-Bold.ttf`
- `fahkwang/italic.ttf`: `<base>ofl/fahkwang/Fahkwang-Italic.ttf`
- `fahkwang/bold-italic.ttf`: `<base>ofl/fahkwang/Fahkwang-BoldItalic.ttf`
- `fahkwang/OFL.txt`: `<base>ofl/fahkwang/OFL.txt`

### Familjen Grotesk

- Copyright: `Copyright 2021 The Familjen Grotesk Project Authors (https://github.com/Familjen-Sthlm/Familjen-Grotesk)`
- `familjengrotesk/regular.ttf`: `<base>ofl/familjengrotesk/FamiljenGrotesk%5Bwght%5D.ttf`
- `familjengrotesk/italic.ttf`: `<base>ofl/familjengrotesk/FamiljenGrotesk-Italic%5Bwght%5D.ttf`
- `familjengrotesk/OFL.txt`: `<base>ofl/familjengrotesk/OFL.txt`

### Fanwood Text

- Copyright: `Copyright (c) 2011, Barry Schwartz (chemoelectric@chemoelectric.org)`
- `fanwoodtext/regular.ttf`: `<base>ofl/fanwoodtext/FanwoodText-Regular.ttf`
- `fanwoodtext/italic.ttf`: `<base>ofl/fanwoodtext/FanwoodText-Italic.ttf`
- `fanwoodtext/OFL.txt`: `<base>ofl/fanwoodtext/OFL.txt`

### Farro

- Copyright: `Copyright 2018 The Farro Project Authors (https://github.com/grayscaleltd/farro)`
- `farro/regular.ttf`: `<base>ofl/farro/Farro-Regular.ttf`
- `farro/bold.ttf`: `<base>ofl/farro/Farro-Bold.ttf`
- `farro/OFL.txt`: `<base>ofl/farro/OFL.txt`

### Farsan

- Copyright: `Copyright (c) 2014 Pooja Saxena (www.poojasaxena.in)`
- `farsan/regular.ttf`: `<base>ofl/farsan/Farsan-Regular.ttf`
- `farsan/OFL.txt`: `<base>ofl/farsan/OFL.txt`

### Faster One

- Copyright: `Copyright 2012 The Faster Project Authors (https://github.com/etunni/faster), with Reserved Font Name 'Faster'`
- `fasterone/regular.ttf`: `<base>ofl/fasterone/FasterOne-Regular.ttf`
- `fasterone/OFL.txt`: `<base>ofl/fasterone/OFL.txt`

### Fasthand

- Copyright: `Copyright 2020 The Fasthand Project Authors (https://github.com/danhhong/Fasthand)`
- `fasthand/regular.ttf`: `<base>ofl/fasthand/Fasthand-Regular.ttf`
- `fasthand/OFL.txt`: `<base>ofl/fasthand/OFL.txt`

### Fauna One

- Copyright: `Copyright 2013 The Fauna One Project Authors (https://github.com/etunni/fauna-one) with Reserved Font Name 'Fauna'`
- `faunaone/regular.ttf`: `<base>ofl/faunaone/FaunaOne-Regular.ttf`
- `faunaone/OFL.txt`: `<base>ofl/faunaone/OFL.txt`

### Faustina

- Copyright: `Copyright 2016 The Faustina Project Authors (https://github.com/Omnibus-Type/Faustina)`
- `faustina/regular.ttf`: `<base>ofl/faustina/Faustina%5Bwght%5D.ttf`
- `faustina/italic.ttf`: `<base>ofl/faustina/Faustina-Italic%5Bwght%5D.ttf`
- `faustina/OFL.txt`: `<base>ofl/faustina/OFL.txt`

### Federant

- Copyright: `Copyright (c) 2011, Cyreal (www.cyreal.org), with Reserved Font Name 'Federant'.`
- `federant/regular.ttf`: `<base>ofl/federant/Federant-Regular.ttf`
- `federant/OFL.txt`: `<base>ofl/federant/OFL.txt`

### Felipa

- Copyright: `Copyright (c) 2011 Fontstage (info@fontstage.com), with Reserved Font Names, 'Felipa'`
- `felipa/regular.ttf`: `<base>ofl/felipa/Felipa-Regular.ttf`
- `felipa/OFL.txt`: `<base>ofl/felipa/OFL.txt`

### Fenix

- Copyright: `Copyright (c) 2012 by Fernando Diaz (fer@ferfolio.com), with Reserved Font Name 'Fenix'.`
- `fenix/regular.ttf`: `<base>ofl/fenix/Fenix-Regular.ttf`
- `fenix/OFL.txt`: `<base>ofl/fenix/OFL.txt`

### Festive

- Copyright: `Copyright 2015 The Festive Pro Project Authors (https://github.com/googlefonts/festive)`
- `festive/regular.ttf`: `<base>ofl/festive/Festive-Regular.ttf`
- `festive/OFL.txt`: `<base>ofl/festive/OFL.txt`

### Figtree

- Copyright: `Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree)`
- `figtree/regular.ttf`: `<base>ofl/figtree/Figtree%5Bwght%5D.ttf`
- `figtree/italic.ttf`: `<base>ofl/figtree/Figtree-Italic%5Bwght%5D.ttf`
- `figtree/OFL.txt`: `<base>ofl/figtree/OFL.txt`

### Finger Paint

- Copyright: `Copyright (c) 2011 by Ralph du Carrois, with Reserved Font Name 'Finger Paint'`
- `fingerpaint/regular.ttf`: `<base>ofl/fingerpaint/FingerPaint-Regular.ttf`
- `fingerpaint/OFL.txt`: `<base>ofl/fingerpaint/OFL.txt`

### Finlandica Headline

- Copyright: `Copyright 2026 The Finlandica Headline Project Authors (https://github.com/HelsinkiTypeStudio/FinlandicaHeadline)`
- `finlandicaheadline/regular.ttf`: `<base>ofl/finlandicaheadline/FinlandicaHeadline%5Bwght%5D.ttf`
- `finlandicaheadline/italic.ttf`: `<base>ofl/finlandicaheadline/FinlandicaHeadline-Italic%5Bwght%5D.ttf`
- `finlandicaheadline/OFL.txt`: `<base>ofl/finlandicaheadline/OFL.txt`

### Finlandica Text

- Copyright: `Copyright 2026 The Finlandica Project Authors (https://github.com/HelsinkiTypeStudio/FinlandicaText)`
- `finlandicatext/regular.ttf`: `<base>ofl/finlandicatext/FinlandicaText%5Bwght%5D.ttf`
- `finlandicatext/italic.ttf`: `<base>ofl/finlandicatext/FinlandicaText-Italic%5Bwght%5D.ttf`
- `finlandicatext/OFL.txt`: `<base>ofl/finlandicatext/OFL.txt`

### Fira Code

- Copyright: `Copyright 2014-2020 The Fira Code Project Authors (https://github.com/tonsky/FiraCode)`
- `firacode/regular.ttf`: `<base>ofl/firacode/FiraCode%5Bwght%5D.ttf`
- `firacode/OFL.txt`: `<base>ofl/firacode/OFL.txt`

### Fira Mono

- Copyright: `Copyright (c) 2012-2013, The Mozilla Corporation and Telefonica S.A.`
- `firamono/regular.ttf`: `<base>ofl/firamono/FiraMono-Regular.ttf`
- `firamono/bold.ttf`: `<base>ofl/firamono/FiraMono-Bold.ttf`
- `firamono/OFL.txt`: `<base>ofl/firamono/OFL.txt`

### Fira Sans

- Copyright: `Copyright (c) 2012-2015, The Mozilla Foundation and Telefonica S.A.`
- `firasans/regular.ttf`: `<base>ofl/firasans/FiraSans-Regular.ttf`
- `firasans/bold.ttf`: `<base>ofl/firasans/FiraSans-Bold.ttf`
- `firasans/italic.ttf`: `<base>ofl/firasans/FiraSans-Italic.ttf`
- `firasans/bold-italic.ttf`: `<base>ofl/firasans/FiraSans-BoldItalic.ttf`
- `firasans/OFL.txt`: `<base>ofl/firasans/OFL.txt`

### Fira Sans Condensed

- Copyright: `Copyright (c) 2012-2015, The Mozilla Foundation and Telefonica S.A.`
- `firasanscondensed/regular.ttf`: `<base>ofl/firasanscondensed/FiraSansCondensed-Regular.ttf`
- `firasanscondensed/bold.ttf`: `<base>ofl/firasanscondensed/FiraSansCondensed-Bold.ttf`
- `firasanscondensed/italic.ttf`: `<base>ofl/firasanscondensed/FiraSansCondensed-Italic.ttf`
- `firasanscondensed/bold-italic.ttf`: `<base>ofl/firasanscondensed/FiraSansCondensed-BoldItalic.ttf`
- `firasanscondensed/OFL.txt`: `<base>ofl/firasanscondensed/OFL.txt`

### Fira Sans Extra Condensed

- Copyright: `Copyright (c) 2012-2015, The Mozilla Foundation and Telefonica S.A.`
- `firasansextracondensed/regular.ttf`: `<base>ofl/firasansextracondensed/FiraSansExtraCondensed-Regular.ttf`
- `firasansextracondensed/bold.ttf`: `<base>ofl/firasansextracondensed/FiraSansExtraCondensed-Bold.ttf`
- `firasansextracondensed/italic.ttf`: `<base>ofl/firasansextracondensed/FiraSansExtraCondensed-Italic.ttf`
- `firasansextracondensed/bold-italic.ttf`: `<base>ofl/firasansextracondensed/FiraSansExtraCondensed-BoldItalic.ttf`
- `firasansextracondensed/OFL.txt`: `<base>ofl/firasansextracondensed/OFL.txt`

### Firjar

- Copyright: `Copyright 2025 The Firjar Project Authors (https://github.com/Mestaratype/Firjar)`
- `firjar/regular.ttf`: `<base>ofl/firjar/Firjar%5Bwdth%2Cwght%5D.ttf`
- `firjar/OFL.txt`: `<base>ofl/firjar/OFL.txt`

### Fjalla One

- Copyright: `Copyright 2012 The Fjalla One Project Authors (https://github.com/SorkinType/FjallaOne)`
- `fjallaone/regular.ttf`: `<base>ofl/fjallaone/FjallaOne-Regular.ttf`
- `fjallaone/OFL.txt`: `<base>ofl/fjallaone/OFL.txt`

### Fleur De Leah

- Copyright: `Copyright 2008-2021 The Fleur De Leah Project Authors (https://github.com/googlefonts/fleurdeleah)`
- `fleurdeleah/regular.ttf`: `<base>ofl/fleurdeleah/FleurDeLeah-Regular.ttf`
- `fleurdeleah/OFL.txt`: `<base>ofl/fleurdeleah/OFL.txt`

### Flow Block

- Copyright: `Copyright 2020 The Flow Project Authors (https://github.com/HYPD/flow-typeface)`
- `flowblock/regular.ttf`: `<base>ofl/flowblock/FlowBlock-Regular.ttf`
- `flowblock/OFL.txt`: `<base>ofl/flowblock/OFL.txt`

### Flow Circular

- Copyright: `Copyright 2020 The Flow Project Authors (https://github.com/HYPD/flow-typeface)`
- `flowcircular/regular.ttf`: `<base>ofl/flowcircular/FlowCircular-Regular.ttf`
- `flowcircular/OFL.txt`: `<base>ofl/flowcircular/OFL.txt`

### Flow Rounded

- Copyright: `Copyright 2020 The Flow Project Authors (https://github.com/HYPD/flow-typeface)`
- `flowrounded/regular.ttf`: `<base>ofl/flowrounded/FlowRounded-Regular.ttf`
- `flowrounded/OFL.txt`: `<base>ofl/flowrounded/OFL.txt`

### Foldit

- Copyright: `Copyright 2021-2022 The Foldit Project Authors (https://github.com/SophiaDesign/GF-Foldit)`
- `foldit/regular.ttf`: `<base>ofl/foldit/Foldit%5Bwght%5D.ttf`
- `foldit/OFL.txt`: `<base>ofl/foldit/OFL.txt`

### Fragment Mono

- Copyright: `Copyright 2022 The Fragment-Mono Project Authors (https://github.com/weiweihuanghuang/fragment-mono)`
- `fragmentmono/regular.ttf`: `<base>ofl/fragmentmono/FragmentMono-Regular.ttf`
- `fragmentmono/italic.ttf`: `<base>ofl/fragmentmono/FragmentMono-Italic.ttf`
- `fragmentmono/OFL.txt`: `<base>ofl/fragmentmono/OFL.txt`

### Fragment Mono SC

- Copyright: `Copyright 2022 The Fragment-Mono Project Authors (https://github.com/weiweihuanghuang/fragment-mono)`
- `fragmentmonosc/regular.ttf`: `<base>ofl/fragmentmonosc/FragmentMonoSC-Regular.ttf`
- `fragmentmonosc/italic.ttf`: `<base>ofl/fragmentmonosc/FragmentMonoSC-Italic.ttf`
- `fragmentmonosc/OFL.txt`: `<base>ofl/fragmentmonosc/OFL.txt`

### Francois One

- Copyright: `Copyright 2011 The Francois One Project Authors (contact@sansoxygen.com)`
- `francoisone/regular.ttf`: `<base>ofl/francoisone/FrancoisOne-Regular.ttf`
- `francoisone/OFL.txt`: `<base>ofl/francoisone/OFL.txt`

### Fraunces

- Copyright: `Copyright 2018 The Fraunces Project Authors (https://github.com/undercasetype/Fraunces)`
- `fraunces/regular.ttf`: `<base>ofl/fraunces/Fraunces%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf`
- `fraunces/italic.ttf`: `<base>ofl/fraunces/Fraunces-Italic%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf`
- `fraunces/OFL.txt`: `<base>ofl/fraunces/OFL.txt`

### Freckle Face

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name 'Freckle Face'`
- `freckleface/regular.ttf`: `<base>ofl/freckleface/FreckleFace-Regular.ttf`
- `freckleface/OFL.txt`: `<base>ofl/freckleface/OFL.txt`

### Fredoka

- Copyright: `Copyright 2016 The Fredoka Project Authors (https://github.com/hafontia/Fredoka-One)`
- `fredoka/regular.ttf`: `<base>ofl/fredoka/Fredoka%5Bwdth%2Cwght%5D.ttf`
- `fredoka/OFL.txt`: `<base>ofl/fredoka/OFL.txt`

### Freehand

- Copyright: `Copyright 2020 The Freehand Project Authors (https://github.com/danhhong/Freehand)`
- `freehand/regular.ttf`: `<base>ofl/freehand/Freehand-Regular.ttf`
- `freehand/OFL.txt`: `<base>ofl/freehand/OFL.txt`

### Freeman

- Copyright: `Copyright 2023 The Freeman Project Authors (https://github.com/rfuenzalida/Freeman)`
- `freeman/regular.ttf`: `<base>ofl/freeman/Freeman-Regular.ttf`
- `freeman/OFL.txt`: `<base>ofl/freeman/OFL.txt`

### Fresca

- Copyright: `Copyright (c) 2011 Fontstage (info@fontstage.com), with Reserved Font Names, 'Fresca'`
- `fresca/regular.ttf`: `<base>ofl/fresca/Fresca-Regular.ttf`
- `fresca/OFL.txt`: `<base>ofl/fresca/OFL.txt`

### Fruktur

- Copyright: `Copyright 2022 The Fruktur Project Authors (https://github.com/SorkinType/Fruktur)`
- `fruktur/regular.ttf`: `<base>ofl/fruktur/Fruktur-Regular.ttf`
- `fruktur/italic.ttf`: `<base>ofl/fruktur/Fruktur-Italic.ttf`
- `fruktur/OFL.txt`: `<base>ofl/fruktur/OFL.txt`

### Fuggles

- Copyright: `Copyright 2012 The Fuggles Pro Project Authors (https://github.com/googlefonts/fuggles)`
- `fuggles/regular.ttf`: `<base>ofl/fuggles/Fuggles-Regular.ttf`
- `fuggles/OFL.txt`: `<base>ofl/fuggles/OFL.txt`

### Funnel Display

- Copyright: `Copyright 2024 The Funnel Project Authors (https://github.com/Dicotype/Funnel)`
- `funneldisplay/regular.ttf`: `<base>ofl/funneldisplay/FunnelDisplay%5Bwght%5D.ttf`
- `funneldisplay/OFL.txt`: `<base>ofl/funneldisplay/OFL.txt`

### Funnel Sans

- Copyright: `Copyright 2024 The Funnel Project Authors (https://github.com/Dicotype/Funnel)`
- `funnelsans/regular.ttf`: `<base>ofl/funnelsans/FunnelSans%5Bwght%5D.ttf`
- `funnelsans/italic.ttf`: `<base>ofl/funnelsans/FunnelSans-Italic%5Bwght%5D.ttf`
- `funnelsans/OFL.txt`: `<base>ofl/funnelsans/OFL.txt`

### Fustat

- Copyright: `Copyright 2024 The Fustat Project Authors (https://github.com/Kief-Type-Foundry/Fustat)`
- `fustat/regular.ttf`: `<base>ofl/fustat/Fustat%5Bwght%5D.ttf`
- `fustat/OFL.txt`: `<base>ofl/fustat/OFL.txt`

### Fuzzy Bubbles

- Copyright: `Copyright 2005 The Fuzzy Bubbles Project Authors (https://github.com/googlefonts/fuzzy-bubbles)`
- `fuzzybubbles/regular.ttf`: `<base>ofl/fuzzybubbles/FuzzyBubbles-Regular.ttf`
- `fuzzybubbles/bold.ttf`: `<base>ofl/fuzzybubbles/FuzzyBubbles-Bold.ttf`
- `fuzzybubbles/OFL.txt`: `<base>ofl/fuzzybubbles/OFL.txt`

### Ga Maamli

- Copyright: `Copyright 2023 The Ga Maamli Project Authors (https://github.com/SorkinType/GaMaamli)`
- `gamaamli/regular.ttf`: `<base>ofl/gamaamli/GaMaamli-Regular.ttf`
- `gamaamli/OFL.txt`: `<base>ofl/gamaamli/OFL.txt`

### Gabarito

- Copyright: `Copyright 2023 The Gabarito Project Authors (https://github.com/naipefoundry/gabarito)`
- `gabarito/regular.ttf`: `<base>ofl/gabarito/Gabarito%5Bwght%5D.ttf`
- `gabarito/OFL.txt`: `<base>ofl/gabarito/OFL.txt`

### Gabriela

- Copyright: `Copyright 2013 The Gabriela Project Authors (https://github.com/etunni/Gabriela), with Reserved Font Name "Gabriela".`
- `gabriela/regular.ttf`: `<base>ofl/gabriela/Gabriela-Regular.ttf`
- `gabriela/OFL.txt`: `<base>ofl/gabriela/OFL.txt`

### Gafata

- Copyright: `Copyright (c) 2010-2013, Lautaro Hourcade (lautaro_h@yahoo.com), with Reserved Font Name 'Gafata'`
- `gafata/regular.ttf`: `<base>ofl/gafata/Gafata-Regular.ttf`
- `gafata/OFL.txt`: `<base>ofl/gafata/OFL.txt`

### Gajraj One

- Copyright: `Copyright 2022 The Gajrajone Project Authors (https://github.com/googlefonts/googlefonts-project-template)`
- `gajrajone/regular.ttf`: `<base>ofl/gajrajone/GajrajOne-Regular.ttf`
- `gajrajone/OFL.txt`: `<base>ofl/gajrajone/OFL.txt`

### Galada

- Copyright: `Copyright 2015 Jeremie Hornus, Yoann Minet, Juan Bruce Copyright (c) 2010, Pablo Impallari (www.impallari.com|impallari@gmail.com). Copyright (c) 2010, 2011, Alexei Vanyashin (www.cyreal.org|a@cyreal.org), with Reserved Font Name Lobster.`
- `galada/regular.ttf`: `<base>ofl/galada/Galada-Regular.ttf`
- `galada/OFL.txt`: `<base>ofl/galada/OFL.txt`

### Galindo

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Names "Galindo"`
- `galindo/regular.ttf`: `<base>ofl/galindo/Galindo-Regular.ttf`
- `galindo/OFL.txt`: `<base>ofl/galindo/OFL.txt`

### Gantari

- Copyright: `Copyright 2022 The Gantari Project Authors (https://github.com/Lafontype/Gantari)`
- `gantari/regular.ttf`: `<base>ofl/gantari/Gantari%5Bwght%5D.ttf`
- `gantari/italic.ttf`: `<base>ofl/gantari/Gantari-Italic%5Bwght%5D.ttf`
- `gantari/OFL.txt`: `<base>ofl/gantari/OFL.txt`

### Gasoek One

- Copyright: `Copyright 2022 The Gasoek Project Authors (https://github.com/JAMO-TYPEFACE/Gasoek)`
- `gasoekone/regular.ttf`: `<base>ofl/gasoekone/GasoekOne-Regular.ttf`
- `gasoekone/OFL.txt`: `<base>ofl/gasoekone/OFL.txt`

### Gayathri

- Copyright: `Copyright 2019 The Gayathri Project Authors (https://gitlab.com/smc/fonts/gayathri)`
- `gayathri/regular.ttf`: `<base>ofl/gayathri/Gayathri-Regular.ttf`
- `gayathri/bold.ttf`: `<base>ofl/gayathri/Gayathri-Bold.ttf`
- `gayathri/OFL.txt`: `<base>ofl/gayathri/OFL.txt`

### Geist

- Copyright: `Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)`
- `geist/regular.ttf`: `<base>ofl/geist/Geist%5Bwght%5D.ttf`
- `geist/italic.ttf`: `<base>ofl/geist/Geist-Italic%5Bwght%5D.ttf`
- `geist/OFL.txt`: `<base>ofl/geist/OFL.txt`

### Geist Mono

- Copyright: `Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)`
- `geistmono/regular.ttf`: `<base>ofl/geistmono/GeistMono%5Bwght%5D.ttf`
- `geistmono/italic.ttf`: `<base>ofl/geistmono/GeistMono-Italic%5Bwght%5D.ttf`
- `geistmono/OFL.txt`: `<base>ofl/geistmono/OFL.txt`

### Gelasio

- Copyright: `Copyright 2022 The Gelasio Project Authors (https://github.com/SorkinType/Gelasio)`
- `gelasio/regular.ttf`: `<base>ofl/gelasio/Gelasio%5Bwght%5D.ttf`
- `gelasio/italic.ttf`: `<base>ofl/gelasio/Gelasio-Italic%5Bwght%5D.ttf`
- `gelasio/OFL.txt`: `<base>ofl/gelasio/OFL.txt`

### Gemunu Libre

- Copyright: `Copyright 2021 The Gemunu Libre Project Authors (https://github.com/mooniak/gemunu-libre-font/)`
- `gemunulibre/regular.ttf`: `<base>ofl/gemunulibre/GemunuLibre%5Bwght%5D.ttf`
- `gemunulibre/OFL.txt`: `<base>ofl/gemunulibre/OFL.txt`

### Genos

- Copyright: `Copyright 2011 The Genos Project Authors (https://github.com/googlefonts/genos)`
- `genos/regular.ttf`: `<base>ofl/genos/Genos%5Bwght%5D.ttf`
- `genos/italic.ttf`: `<base>ofl/genos/Genos-Italic%5Bwght%5D.ttf`
- `genos/OFL.txt`: `<base>ofl/genos/OFL.txt`

### Geologica

- Copyright: `Copyright 2020 The Geologisk Project Authors (https://github.com/monokromskriftforlag/geologisk)`
- `geologica/regular.ttf`: `<base>ofl/geologica/Geologica%5BCRSV%2CSHRP%2Cslnt%2Cwght%5D.ttf`
- `geologica/OFL.txt`: `<base>ofl/geologica/OFL.txt`

### Geom

- Copyright: `Copyright 2022 The Geom Project Authors (https://github.com/ThanosPoulakidas/Geom)`
- `geom/regular.ttf`: `<base>ofl/geom/Geom%5Bwght%5D.ttf`
- `geom/italic.ttf`: `<base>ofl/geom/Geom-Italic%5Bwght%5D.ttf`
- `geom/OFL.txt`: `<base>ofl/geom/OFL.txt`

### Geomini

- Copyright: `Copyright 2026 The Geomini Project Authors (https://github.com/fontbob/geomini)`
- `geomini/regular.ttf`: `<base>ofl/geomini/Geomini%5Bwght%5D.ttf`
- `geomini/OFL.txt`: `<base>ofl/geomini/OFL.txt`

### Georama

- Copyright: `Copyright 2020 The Georama Project Authors (https://github.com/productiontype/Georama)`
- `georama/regular.ttf`: `<base>ofl/georama/Georama%5Bwdth%2Cwght%5D.ttf`
- `georama/italic.ttf`: `<base>ofl/georama/Georama-Italic%5Bwdth%2Cwght%5D.ttf`
- `georama/OFL.txt`: `<base>ofl/georama/OFL.txt`

### Gideon Roman

- Copyright: `Copyright 2009-2021 The Gideon Roman Project Authors (https://github.com/googlefonts/gideon)`
- `gideonroman/regular.ttf`: `<base>ofl/gideonroman/GideonRoman-Regular.ttf`
- `gideonroman/OFL.txt`: `<base>ofl/gideonroman/OFL.txt`

### Gidole

- Copyright: `Copyright 2015 The Gidole Project Authors (https://github.com/googlefonts/gidole)`
- `gidole/regular.ttf`: `<base>ofl/gidole/Gidole-Regular.ttf`
- `gidole/OFL.txt`: `<base>ofl/gidole/OFL.txt`

### Gidugu

- Copyright: `Copyright 2025 The Gidugu Project Authors (https://github.com/googlefonts/gidugu)`
- `gidugu/regular.ttf`: `<base>ofl/gidugu/Gidugu-Regular.ttf`
- `gidugu/OFL.txt`: `<base>ofl/gidugu/OFL.txt`

### Gilda Display

- Copyright: `Copyright 2012 The Gilda Display Project Authors (https://github.com/etunni/gilda-display) with Reserved Font Name 'Gilda'.`
- `gildadisplay/regular.ttf`: `<base>ofl/gildadisplay/GildaDisplay-Regular.ttf`
- `gildadisplay/OFL.txt`: `<base>ofl/gildadisplay/OFL.txt`

### Girassol

- Copyright: `Copyright 2019 The Girassol Project Authors (https://github.com/liamspradlin/Girassol-Display)`
- `girassol/regular.ttf`: `<base>ofl/girassol/Girassol-Regular.ttf`
- `girassol/OFL.txt`: `<base>ofl/girassol/OFL.txt`

### Give You Glory

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `giveyouglory/regular.ttf`: `<base>ofl/giveyouglory/GiveYouGlory.ttf`
- `giveyouglory/OFL.txt`: `<base>ofl/giveyouglory/OFL.txt`

### Glegoo

- Copyright: `Copyright (c) 2011, Eduardo Tunni (http://www.tipo.net.ar), Copyright 2011-13 Lohit Fonts Project contributors (http://fedorahosted.org/lohit)`
- `glegoo/regular.ttf`: `<base>ofl/glegoo/Glegoo-Regular.ttf`
- `glegoo/bold.ttf`: `<base>ofl/glegoo/Glegoo-Bold.ttf`
- `glegoo/OFL.txt`: `<base>ofl/glegoo/OFL.txt`

### Gloock

- Copyright: `Copyright 2022 The Gloock Project Authors (https://github.com/duartp/gloock)`
- `gloock/regular.ttf`: `<base>ofl/gloock/Gloock-Regular.ttf`
- `gloock/OFL.txt`: `<base>ofl/gloock/OFL.txt`

### Gloria Hallelujah

- Copyright: `Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)`
- `gloriahallelujah/regular.ttf`: `<base>ofl/gloriahallelujah/GloriaHallelujah.ttf`
- `gloriahallelujah/OFL.txt`: `<base>ofl/gloriahallelujah/OFL.txt`

### Glory

- Copyright: `Copyright 2016-2020 The Glory Project Authors (https://github.com/googlefonts/glory)`
- `glory/regular.ttf`: `<base>ofl/glory/Glory%5Bwght%5D.ttf`
- `glory/italic.ttf`: `<base>ofl/glory/Glory-Italic%5Bwght%5D.ttf`
- `glory/OFL.txt`: `<base>ofl/glory/OFL.txt`

### Gluten

- Copyright: `Copyright 2020 The Gluten Project Authors (https://github.com/Etcetera-Type-Co/Gluten)`
- `gluten/regular.ttf`: `<base>ofl/gluten/Gluten%5Bslnt%2Cwght%5D.ttf`
- `gluten/OFL.txt`: `<base>ofl/gluten/OFL.txt`

### Golos Text

- Copyright: `Copyright 2019 The Golos Text Project Authors (https://github.com/googlefonts/golos-text)`
- `golostext/regular.ttf`: `<base>ofl/golostext/GolosText%5Bwght%5D.ttf`
- `golostext/OFL.txt`: `<base>ofl/golostext/OFL.txt`

### Google Sans Code

- Copyright: `Copyright 2025 The Google Sans Code Project Authors (github.com/googlefonts/googlesans-code)`
- `googlesanscode/regular.ttf`: `<base>ofl/googlesanscode/GoogleSansCode%5Bwght%5D.ttf`
- `googlesanscode/italic.ttf`: `<base>ofl/googlesanscode/GoogleSansCode-Italic%5Bwght%5D.ttf`
- `googlesanscode/OFL.txt`: `<base>ofl/googlesanscode/OFL.txt`

### Gorditas

- Copyright: `Copyright (c) 2011 by Gustavo Dipre (gbrenda1987@gmail.com), with Reserved Font Name "Gorditas".`
- `gorditas/regular.ttf`: `<base>ofl/gorditas/Gorditas-Regular.ttf`
- `gorditas/bold.ttf`: `<base>ofl/gorditas/Gorditas-Bold.ttf`
- `gorditas/OFL.txt`: `<base>ofl/gorditas/OFL.txt`

### Gotu

- Copyright: `Copyright (c) 2016 Ek Type (www.ektype.in)`
- `gotu/regular.ttf`: `<base>ofl/gotu/Gotu-Regular.ttf`
- `gotu/OFL.txt`: `<base>ofl/gotu/OFL.txt`

### Goudy Bookletter 1911

- Copyright: `Copyright (c) 2010, Barry Schwartz (crudfactory.com)`
- `goudybookletter1911/regular.ttf`: `<base>ofl/goudybookletter1911/GoudyBookletter1911.ttf`
- `goudybookletter1911/OFL.txt`: `<base>ofl/goudybookletter1911/OFL.txt`

### Graduate

- Copyright: `Copyright 2012 The Graduate Project Authors (https://github.com/etunni/graduate) with Reserved Font Name "Graduate"`
- `graduate/regular.ttf`: `<base>ofl/graduate/Graduate-Regular.ttf`
- `graduate/OFL.txt`: `<base>ofl/graduate/OFL.txt`

### Grandiflora One

- Copyright: `Copyright 2022 The Grandiflora Project Authors (https://github.com/JAMO-TYPEFACE/Grandiflora)`
- `grandifloraone/regular.ttf`: `<base>ofl/grandifloraone/GrandifloraOne-Regular.ttf`
- `grandifloraone/OFL.txt`: `<base>ofl/grandifloraone/OFL.txt`

### Grandstander

- Copyright: `Copyright 2020 The Grandstander Project Authors (https://github.com/Etcetera-Type-Co/Grandstander)`
- `grandstander/regular.ttf`: `<base>ofl/grandstander/Grandstander%5Bwght%5D.ttf`
- `grandstander/italic.ttf`: `<base>ofl/grandstander/Grandstander-Italic%5Bwght%5D.ttf`
- `grandstander/OFL.txt`: `<base>ofl/grandstander/OFL.txt`

### Grape Nuts

- Copyright: `Copyright 2003 The Grape Nuts Project Authors (https://github.com/googlefonts/grapenuts)`
- `grapenuts/regular.ttf`: `<base>ofl/grapenuts/GrapeNuts-Regular.ttf`
- `grapenuts/OFL.txt`: `<base>ofl/grapenuts/OFL.txt`

### Great Vibes

- Copyright: `Copyright 2015 The Great Vibes Pro Project Authors (https://github.com/googlefonts/great-vibes)`
- `greatvibes/regular.ttf`: `<base>ofl/greatvibes/GreatVibes-Regular.ttf`
- `greatvibes/OFL.txt`: `<base>ofl/greatvibes/OFL.txt`

### Grechen Fuemen

- Copyright: `Copyright 2003-2021 The Grechen Fuemen Project Authors (https://github.com/googlefonts/grechen-fuemen)`
- `grechenfuemen/regular.ttf`: `<base>ofl/grechenfuemen/GrechenFuemen-Regular.ttf`
- `grechenfuemen/OFL.txt`: `<base>ofl/grechenfuemen/OFL.txt`

### Grenze

- Copyright: `Copyright 2019, The Grenze Project Authors (https://github.com/Omnibus-Type/Grenze)`
- `grenze/regular.ttf`: `<base>ofl/grenze/Grenze%5Bwght%5D.ttf`
- `grenze/italic.ttf`: `<base>ofl/grenze/Grenze-Italic%5Bwght%5D.ttf`
- `grenze/OFL.txt`: `<base>ofl/grenze/OFL.txt`

### Grenze Gotisch

- Copyright: `Copyright 2020 The Grenze Gotisch Project Authors (https://github.com/Omnibus-Type/Grenze-Gotisch)`
- `grenzegotisch/regular.ttf`: `<base>ofl/grenzegotisch/GrenzeGotisch%5Bwght%5D.ttf`
- `grenzegotisch/OFL.txt`: `<base>ofl/grenzegotisch/OFL.txt`

### Grey Qo

- Copyright: `Copyright 2008-2021 The Grey Qo Project Authors (https://github.com/googlefonts/grey-qo)`
- `greyqo/regular.ttf`: `<base>ofl/greyqo/GreyQo-Regular.ttf`
- `greyqo/OFL.txt`: `<base>ofl/greyqo/OFL.txt`

### Gruppo

- Copyright: `Copyright 2010 The Gruppo Project Authors (https://github.com/googlefonts/GruppoFont)`
- `gruppo/regular.ttf`: `<base>ofl/gruppo/Gruppo-Regular.ttf`
- `gruppo/OFL.txt`: `<base>ofl/gruppo/OFL.txt`

### Gugi

- Copyright: `Copyright (c) 2017 by TAE System & Typefaces Co.. All rights reserved.`
- `gugi/regular.ttf`: `<base>ofl/gugi/Gugi-Regular.ttf`
- `gugi/OFL.txt`: `<base>ofl/gugi/OFL.txt`

### Gulzar

- Copyright: `Copyright 2021 The Gulzar Project Authors (https://github.com/simoncozens/Gulzar)`
- `gulzar/regular.ttf`: `<base>ofl/gulzar/Gulzar-Regular.ttf`
- `gulzar/OFL.txt`: `<base>ofl/gulzar/OFL.txt`

### Gupter

- Copyright: `Copyright 2019 The Gupter Project Authors (https://github.com/octaviopardo/GUPTER)`
- `gupter/regular.ttf`: `<base>ofl/gupter/Gupter-Regular.ttf`
- `gupter/bold.ttf`: `<base>ofl/gupter/Gupter-Bold.ttf`
- `gupter/OFL.txt`: `<base>ofl/gupter/OFL.txt`

### Gurajada

- Copyright: `Copyright (c) 2012 Silicon Andhra (fonts.siliconandhra.org). Copyright (c) 2013, Juan Pablo del Peral (juandelperal@htfonts.com), with Reserved Font Names 'Alegreya Sans'`
- `gurajada/regular.ttf`: `<base>ofl/gurajada/Gurajada-Regular.ttf`
- `gurajada/OFL.txt`: `<base>ofl/gurajada/OFL.txt`

### Gveret Levin

- Copyright: `Copyright 2024 The Gveret Levin Project Authors (https://github.com/AlefAlefAlef/gveret-levin)`
- `gveretlevin/regular.ttf`: `<base>ofl/gveretlevin/GveretLevin-Regular.ttf`
- `gveretlevin/OFL.txt`: `<base>ofl/gveretlevin/OFL.txt`

### Gwendolyn

- Copyright: `Copyright 2015 The Gwendolyn Project Authors (https://github.com/googlefonts/gwendolyn)`
- `gwendolyn/regular.ttf`: `<base>ofl/gwendolyn/Gwendolyn-Regular.ttf`
- `gwendolyn/bold.ttf`: `<base>ofl/gwendolyn/Gwendolyn-Bold.ttf`
- `gwendolyn/OFL.txt`: `<base>ofl/gwendolyn/OFL.txt`

### Halant

- Copyright: `Copyright (c) 2014, Indian Type Foundry (info@indiantypefoundry.com).`
- `halant/regular.ttf`: `<base>ofl/halant/Halant-Regular.ttf`
- `halant/bold.ttf`: `<base>ofl/halant/Halant-Bold.ttf`
- `halant/OFL.txt`: `<base>ofl/halant/OFL.txt`

### Hanalei

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name 'Hanalei'`
- `hanalei/regular.ttf`: `<base>ofl/hanalei/Hanalei-Regular.ttf`
- `hanalei/OFL.txt`: `<base>ofl/hanalei/OFL.txt`

### Hanalei Fill

- Copyright: `Copyright (c) 2012, Brian J. Bonislawsky DBA Astigmatic (AOETI) (astigma@astigmatic.com), with Reserved Font Name 'Hanalei'`
- `hanaleifill/regular.ttf`: `<base>ofl/hanaleifill/HanaleiFill-Regular.ttf`
- `hanaleifill/OFL.txt`: `<base>ofl/hanaleifill/OFL.txt`

### Handjet

- Copyright: `Copyright 2018 The Handjet Project Authors (https://github.com/rosettatype/Handjet/)`
- `handjet/regular.ttf`: `<base>ofl/handjet/Handjet%5BELGR%2CELSH%2Cwght%5D.ttf`
- `handjet/OFL.txt`: `<base>ofl/handjet/OFL.txt`

### Hanken Grotesk

- Copyright: `Copyright 2021 The Hanken Grotesk Project Authors (https://github.com/marcologous/hanken-grotesk)`
- `hankengrotesk/regular.ttf`: `<base>ofl/hankengrotesk/HankenGrotesk%5Bwght%5D.ttf`
- `hankengrotesk/italic.ttf`: `<base>ofl/hankengrotesk/HankenGrotesk-Italic%5Bwght%5D.ttf`
- `hankengrotesk/OFL.txt`: `<base>ofl/hankengrotesk/OFL.txt`

### Hanuman

- Copyright: `Copyright 2019 The Hanuman Project Authors (https://github.com/danhhong/Hanuman)`
- `hanuman/regular.ttf`: `<base>ofl/hanuman/Hanuman%5Bwght%5D.ttf`
- `hanuman/OFL.txt`: `<base>ofl/hanuman/OFL.txt`

### Happy Monkey

- Copyright: `Copyright (c) 2011 by Brenda Gallo (gbrenda1987@gmail.com), with Reserved Font Name "Happy Monkey".`
- `happymonkey/regular.ttf`: `<base>ofl/happymonkey/HappyMonkey-Regular.ttf`
- `happymonkey/OFL.txt`: `<base>ofl/happymonkey/OFL.txt`

### Hedvig Letters Sans

- Copyright: `Copyright 2023 The Hedvig Letters Project Authors (https://github.com/KanonFoundry/HedvigLetters)`
- `hedvigletterssans/regular.ttf`: `<base>ofl/hedvigletterssans/HedvigLettersSans-Regular.ttf`
- `hedvigletterssans/OFL.txt`: `<base>ofl/hedvigletterssans/OFL.txt`

### Hedvig Letters Serif

- Copyright: `Copyright 2023 The Hedvig Letters Project Authors (https://github.com/KanonFoundry/HedvigLetters)`
- `hedviglettersserif/regular.ttf`: `<base>ofl/hedviglettersserif/HedvigLettersSerif%5Bopsz%5D.ttf`
- `hedviglettersserif/OFL.txt`: `<base>ofl/hedviglettersserif/OFL.txt`

### Heebo

- Copyright: `Copyright 2014 The Heebo Project Authors (https://github.com/OdedEzer/heebo)`
- `heebo/regular.ttf`: `<base>ofl/heebo/Heebo%5Bwght%5D.ttf`
- `heebo/OFL.txt`: `<base>ofl/heebo/OFL.txt`

### Hepta Slab

- Copyright: `Copyright 2018 The Hepta Slab Project Authors (https://github.com/mjlagattuta/Hepta-Slab)`
- `heptaslab/regular.ttf`: `<base>ofl/heptaslab/HeptaSlab%5Bwght%5D.ttf`
- `heptaslab/OFL.txt`: `<base>ofl/heptaslab/OFL.txt`

### Hermeneus One

- Copyright: `Copyright (c) 2012, Pablo Impallari (www.impallari.com|impallari@gmail.com), Rodrigo Fuenzalida (www.rfuenzalida.com|hello@rfuenzalida.com), with Reserved Font Name Hermeneus.`
- `hermeneusone/regular.ttf`: `<base>ofl/hermeneusone/HermeneusOne-Regular.ttf`
- `hermeneusone/OFL.txt`: `<base>ofl/hermeneusone/OFL.txt`

### Hibur Mono

- Copyright: `Copyright 2025-2026 The Hibur Mono Font Project Authors (https://github.com/typehabesha/HiburMono)`
- `hiburmono/regular.ttf`: `<base>ofl/hiburmono/HiburMono-Regular.ttf`
- `hiburmono/OFL.txt`: `<base>ofl/hiburmono/OFL.txt`

### Hind

- Copyright: `Copyright (c) 2014, Indian Type Foundry (info@indiantypefoundry.com).`
- `hind/regular.ttf`: `<base>ofl/hind/Hind-Regular.ttf`
- `hind/bold.ttf`: `<base>ofl/hind/Hind-Bold.ttf`
- `hind/OFL.txt`: `<base>ofl/hind/OFL.txt`

### Hind Colombo

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindcolombo/regular.ttf`: `<base>ofl/hindcolombo/HindColombo-Regular.ttf`
- `hindcolombo/bold.ttf`: `<base>ofl/hindcolombo/HindColombo-Bold.ttf`
- `hindcolombo/OFL.txt`: `<base>ofl/hindcolombo/OFL.txt`

### Hind Guntur

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindguntur/regular.ttf`: `<base>ofl/hindguntur/HindGuntur-Regular.ttf`
- `hindguntur/bold.ttf`: `<base>ofl/hindguntur/HindGuntur-Bold.ttf`
- `hindguntur/OFL.txt`: `<base>ofl/hindguntur/OFL.txt`

### Hind Jalandhar

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindjalandhar/regular.ttf`: `<base>ofl/hindjalandhar/HindJalandhar-Regular.ttf`
- `hindjalandhar/bold.ttf`: `<base>ofl/hindjalandhar/HindJalandhar-Bold.ttf`
- `hindjalandhar/OFL.txt`: `<base>ofl/hindjalandhar/OFL.txt`

### Hind Kochi

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindkochi/regular.ttf`: `<base>ofl/hindkochi/HindKochi-Regular.ttf`
- `hindkochi/bold.ttf`: `<base>ofl/hindkochi/HindKochi-Bold.ttf`
- `hindkochi/OFL.txt`: `<base>ofl/hindkochi/OFL.txt`

### Hind Madurai

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindmadurai/regular.ttf`: `<base>ofl/hindmadurai/HindMadurai-Regular.ttf`
- `hindmadurai/bold.ttf`: `<base>ofl/hindmadurai/HindMadurai-Bold.ttf`
- `hindmadurai/OFL.txt`: `<base>ofl/hindmadurai/OFL.txt`

### Hind Mysuru

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindmysuru/regular.ttf`: `<base>ofl/hindmysuru/HindMysuru-Regular.ttf`
- `hindmysuru/bold.ttf`: `<base>ofl/hindmysuru/HindMysuru-Bold.ttf`
- `hindmysuru/OFL.txt`: `<base>ofl/hindmysuru/OFL.txt`

### Hind Siliguri

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindsiliguri/regular.ttf`: `<base>ofl/hindsiliguri/HindSiliguri-Regular.ttf`
- `hindsiliguri/bold.ttf`: `<base>ofl/hindsiliguri/HindSiliguri-Bold.ttf`
- `hindsiliguri/OFL.txt`: `<base>ofl/hindsiliguri/OFL.txt`

### Hind Vadodara

- Copyright: `Copyright (c) 2015 Indian Type Foundry (info@indiantypefoundry.com)`
- `hindvadodara/regular.ttf`: `<base>ofl/hindvadodara/HindVadodara-Regular.ttf`
- `hindvadodara/bold.ttf`: `<base>ofl/hindvadodara/HindVadodara-Bold.ttf`
- `hindvadodara/OFL.txt`: `<base>ofl/hindvadodara/OFL.txt`

### Holtwood One SC

- Copyright: `Copyright 2011 The Holtwood Project Authors (https://github.com/googlefonts/HoltwoodFont)`
- `holtwoodonesc/regular.ttf`: `<base>ofl/holtwoodonesc/HoltwoodOneSC-Regular.ttf`
- `holtwoodonesc/OFL.txt`: `<base>ofl/holtwoodonesc/OFL.txt`

### Homenaje

- Copyright: `Copyright 2016 The Homenaje Project Authors (https://github.com/googlefonts/Homenaje), with Reserved Font Name 'Homenaje’.`
- `homenaje/regular.ttf`: `<base>ofl/homenaje/Homenaje-Regular.ttf`
- `homenaje/OFL.txt`: `<base>ofl/homenaje/OFL.txt`

### Host Grotesk

- Copyright: `Copyright 2023 The Host Grotesk Project Authors (https://github.com/Element-Type/HostGrotesk)`
- `hostgrotesk/regular.ttf`: `<base>ofl/hostgrotesk/HostGrotesk%5Bwght%5D.ttf`
- `hostgrotesk/italic.ttf`: `<base>ofl/hostgrotesk/HostGrotesk-Italic%5Bwght%5D.ttf`
- `hostgrotesk/OFL.txt`: `<base>ofl/hostgrotesk/OFL.txt`

### Hubballi

- Copyright: `Copyright 2016 The Hubballi Project Authors (https://github.com/erinmclaughlin/Hubballi)`
- `hubballi/regular.ttf`: `<base>ofl/hubballi/Hubballi-Regular.ttf`
- `hubballi/OFL.txt`: `<base>ofl/hubballi/OFL.txt`

### Hubot Sans

- Copyright: `Copyright 2021 The Hubot Sans Project Authors (https://github.com/github/hubot-sans), with Reserved Font Name "Hubot"`
- `hubotsans/regular.ttf`: `<base>ofl/hubotsans/HubotSans%5Bwdth%2Cwght%5D.ttf`
- `hubotsans/italic.ttf`: `<base>ofl/hubotsans/HubotSans-Italic%5Bwdth%2Cwght%5D.ttf`
- `hubotsans/OFL.txt`: `<base>ofl/hubotsans/OFL.txt`

### Hurricane

- Copyright: `Copyright 2016-2021 The Hurricane Project Authors (https://github.com/googlefonts/hurricane)`
- `hurricane/regular.ttf`: `<base>ofl/hurricane/Hurricane-Regular.ttf`
- `hurricane/OFL.txt`: `<base>ofl/hurricane/OFL.txt`

### Ibarra Real Nova

- Copyright: `Copyright 2007 The Ibarra Real Nova Project Authors (https://github.com/googlefonts/ibarrareal)`
- `ibarrarealnova/regular.ttf`: `<base>ofl/ibarrarealnova/IbarraRealNova%5Bwght%5D.ttf`
- `ibarrarealnova/italic.ttf`: `<base>ofl/ibarrarealnova/IbarraRealNova-Italic%5Bwght%5D.ttf`
- `ibarrarealnova/OFL.txt`: `<base>ofl/ibarrarealnova/OFL.txt`

### IBM Plex Sans

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsans/regular.ttf`: `<base>ofl/ibmplexsans/IBMPlexSans%5Bwdth%2Cwght%5D.ttf`
- `ibmplexsans/italic.ttf`: `<base>ofl/ibmplexsans/IBMPlexSans-Italic%5Bwdth%2Cwght%5D.ttf`
- `ibmplexsans/OFL.txt`: `<base>ofl/ibmplexsans/OFL.txt`

### IBM Plex Sans Arabic

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsansarabic/regular.ttf`: `<base>ofl/ibmplexsansarabic/IBMPlexSansArabic-Regular.ttf`
- `ibmplexsansarabic/bold.ttf`: `<base>ofl/ibmplexsansarabic/IBMPlexSansArabic-Bold.ttf`
- `ibmplexsansarabic/OFL.txt`: `<base>ofl/ibmplexsansarabic/OFL.txt`

### IBM Plex Sans Condensed

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsanscondensed/regular.ttf`: `<base>ofl/ibmplexsanscondensed/IBMPlexSansCondensed-Regular.ttf`
- `ibmplexsanscondensed/bold.ttf`: `<base>ofl/ibmplexsanscondensed/IBMPlexSansCondensed-Bold.ttf`
- `ibmplexsanscondensed/italic.ttf`: `<base>ofl/ibmplexsanscondensed/IBMPlexSansCondensed-Italic.ttf`
- `ibmplexsanscondensed/bold-italic.ttf`: `<base>ofl/ibmplexsanscondensed/IBMPlexSansCondensed-BoldItalic.ttf`
- `ibmplexsanscondensed/OFL.txt`: `<base>ofl/ibmplexsanscondensed/OFL.txt`

### IBM Plex Sans Devanagari

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsansdevanagari/regular.ttf`: `<base>ofl/ibmplexsansdevanagari/IBMPlexSansDevanagari-Regular.ttf`
- `ibmplexsansdevanagari/bold.ttf`: `<base>ofl/ibmplexsansdevanagari/IBMPlexSansDevanagari-Bold.ttf`
- `ibmplexsansdevanagari/OFL.txt`: `<base>ofl/ibmplexsansdevanagari/OFL.txt`

### IBM Plex Sans Hebrew

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsanshebrew/regular.ttf`: `<base>ofl/ibmplexsanshebrew/IBMPlexSansHebrew-Regular.ttf`
- `ibmplexsanshebrew/bold.ttf`: `<base>ofl/ibmplexsanshebrew/IBMPlexSansHebrew-Bold.ttf`
- `ibmplexsanshebrew/OFL.txt`: `<base>ofl/ibmplexsanshebrew/OFL.txt`

### IBM Plex Sans JP

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsansjp/regular.ttf`: `<base>ofl/ibmplexsansjp/IBMPlexSansJP-Regular.ttf`
- `ibmplexsansjp/bold.ttf`: `<base>ofl/ibmplexsansjp/IBMPlexSansJP-Bold.ttf`
- `ibmplexsansjp/OFL.txt`: `<base>ofl/ibmplexsansjp/OFL.txt`

### IBM Plex Sans Thai

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsansthai/regular.ttf`: `<base>ofl/ibmplexsansthai/IBMPlexSansThai-Regular.ttf`
- `ibmplexsansthai/bold.ttf`: `<base>ofl/ibmplexsansthai/IBMPlexSansThai-Bold.ttf`
- `ibmplexsansthai/OFL.txt`: `<base>ofl/ibmplexsansthai/OFL.txt`

### IBM Plex Sans Thai Looped

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexsansthailooped/regular.ttf`: `<base>ofl/ibmplexsansthailooped/IBMPlexSansThaiLooped-Regular.ttf`
- `ibmplexsansthailooped/bold.ttf`: `<base>ofl/ibmplexsansthailooped/IBMPlexSansThaiLooped-Bold.ttf`
- `ibmplexsansthailooped/OFL.txt`: `<base>ofl/ibmplexsansthailooped/OFL.txt`

### IBM Plex Serif

- Copyright: `Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"`
- `ibmplexserif/regular.ttf`: `<base>ofl/ibmplexserif/IBMPlexSerif-Regular.ttf`
- `ibmplexserif/bold.ttf`: `<base>ofl/ibmplexserif/IBMPlexSerif-Bold.ttf`
- `ibmplexserif/italic.ttf`: `<base>ofl/ibmplexserif/IBMPlexSerif-Italic.ttf`
- `ibmplexserif/bold-italic.ttf`: `<base>ofl/ibmplexserif/IBMPlexSerif-BoldItalic.ttf`
- `ibmplexserif/OFL.txt`: `<base>ofl/ibmplexserif/OFL.txt`

### Imbue

- Copyright: `Copyright 2020 The Imbue Project Authors (https://github.com/Etcetera-Type-Co/Imbue)`
- `imbue/regular.ttf`: `<base>ofl/imbue/Imbue%5Bopsz%2Cwght%5D.ttf`
- `imbue/OFL.txt`: `<base>ofl/imbue/OFL.txt`

### Imperial Script

- Copyright: `Copyright 2008 The Imperial Script Project Authors (https://github.com/googlefonts/imperial-script)`
- `imperialscript/regular.ttf`: `<base>ofl/imperialscript/ImperialScript-Regular.ttf`
- `imperialscript/OFL.txt`: `<base>ofl/imperialscript/OFL.txt`

### Imprima

- Copyright: `Copyright 2012 The Imprima Project Authors (https://github.com/etunni/imprima), with Reserved Font Name "Imprima"`
- `imprima/regular.ttf`: `<base>ofl/imprima/Imprima-Regular.ttf`
- `imprima/OFL.txt`: `<base>ofl/imprima/OFL.txt`

### Inclusive Sans

- Copyright: `Copyright 2022 The Inclusive Sans Project Authors (https://github.com/LivKing/Inclusive-Sans)`
- `inclusivesans/regular.ttf`: `<base>ofl/inclusivesans/InclusiveSans%5Bwght%5D.ttf`
- `inclusivesans/italic.ttf`: `<base>ofl/inclusivesans/InclusiveSans-Italic%5Bwght%5D.ttf`
- `inclusivesans/OFL.txt`: `<base>ofl/inclusivesans/OFL.txt`

### Inconsolata

- Copyright: `Copyright 2006 The Inconsolata Project Authors`
- `inconsolata/regular.ttf`: `<base>ofl/inconsolata/Inconsolata%5Bwdth%2Cwght%5D.ttf`
- `inconsolata/OFL.txt`: `<base>ofl/inconsolata/OFL.txt`

### Indie Flower

- Copyright: `Copyright 2010 The Indie Flower Authors (kimberlygeswein.com),`
- `indieflower/regular.ttf`: `<base>ofl/indieflower/IndieFlower-Regular.ttf`
- `indieflower/OFL.txt`: `<base>ofl/indieflower/OFL.txt`

### Ingrid Darling

- Copyright: `Copyright 2014-2021 The Ingrid Darling Project Authors (https://github.com/googlefonts/ingrid-darling)`
- `ingriddarling/regular.ttf`: `<base>ofl/ingriddarling/IngridDarling-Regular.ttf`
- `ingriddarling/OFL.txt`: `<base>ofl/ingriddarling/OFL.txt`

### Inknut Antiqua

- Copyright: `Copyright 2014 The Inknut Antiqua Project Authors (https://github.com/clauseggers/Inknut-Antiqua)`
- `inknutantiqua/regular.ttf`: `<base>ofl/inknutantiqua/InknutAntiqua-Regular.ttf`
- `inknutantiqua/bold.ttf`: `<base>ofl/inknutantiqua/InknutAntiqua-Bold.ttf`
- `inknutantiqua/OFL.txt`: `<base>ofl/inknutantiqua/OFL.txt`

## Checksums (SHA-256)

```
3892bb74578207ed6edae040a0869e54dcae13a466d005460570947062137dd8  abeezee/italic.ttf
f0376d04eb58fb19e9f1690a99a1eb37380ad0246f7d503f2abd8e8a74ed12be  abeezee/OFL.txt
2901c8df256648cc2bb2e3afb381cb8d28e65ed3dbe11de20695ae4d5ffdeda9  abeezee/regular.ttf
4f4bc3806a1e55789c6ef75ca5fc628297b05292f74966474dc0d40324abc609  abel/OFL.txt
8809dcad25318225052f88333e208c5aad4adcb7b2c934c135735ec19aa410b4  abel/regular.ttf
01fb4cd74841c5f108372737a74cfedeaf0a722ca23e2275dc69f411dc0ad5a6  abhayalibre/bold.ttf
fe9183a0b7c1ae626b14004cd533c89ec7c192aba017f81ab71ede910256abb2  abhayalibre/OFL.txt
d4279d38a0012fa54d340979694e70e3235266220dedc0d7000131345fb33bd4  abhayalibre/regular.ttf
da0971c73aa1773b791926b81530f3cec50c94031912f162a320263488805ef8  aboreto/OFL.txt
fc702d535857fa2bda802647b9d55f82a07502d4acdfd95b47279b3bf479eaa1  aboreto/regular.ttf
16a8be6ac4b009ba1dd1e17cea48762f4915609ea5dca1303f716cf63998739d  adamina/OFL.txt
e7108cfee0a718d5885fc8d0f03555fa6e0c4b6309e4b15ea991aadd824c34b7  adamina/regular.ttf
657961e80b42febe82f70a56a4ffe6bbd1dba06aec6338f002f729e637fdb902  adlamdisplay/OFL.txt
cc36c3c6cba02522b86ef6c5ee7b062c5bf2a60b0f51f9b87a44c7d50d650899  adlamdisplay/regular.ttf
0917a5d65589025f2a752b1b0568f924dac49a065a25b4d60116b3c6d4d9ebae  adventpro/italic.ttf
c8d52b6a6c2a6c46193a48d4e6dc7368896bc7d4c069f33abca0728476957aec  adventpro/OFL.txt
b60ab2920b89bdc4b7dadfb282cadac6e03833e7a80844f9eac096359b2b9766  adventpro/regular.ttf
1cf0a5853330267433c0a1603e239ff33e5963887ec2545c96a1516ca960a717  afacad/italic.ttf
a65e37f173d58cab5d4f8eb6373f4e24ee79ad6c80235dbe845a117917af2d99  afacad/OFL.txt
89513fc375cafeecca81110f6a3ef5882d7ac2d871a365b6c93bbfa6039b8230  afacad/regular.ttf
992be51252f484e260e4f84356dc0e87c3e458619b16d098c76b26ef5c5ab0fb  afacadflux/OFL.txt
28aa3569ad95f7f7b363890085ad231aad280b3f7f73d37bf6d80285189ea636  afacadflux/regular.ttf
e338828ef7e0686999d6e041d8b2020a952e537179c4bec70a43cf04000f1202  agbalumo/OFL.txt
d9e35c6debf1319267140838f3c30c3c51d9f47c7050b5482c14c5accf7f4d94  agbalumo/regular.ttf
d75fd96cf62e06d172484ad158614546437a2a988b16feed8b751f9838447ec5  agdasima/bold.ttf
5a5df9eeb233115038bb9bbe00d37897195864802cb889fe755697ba7736d518  agdasima/OFL.txt
512b6ec7aa802bb92cf3b816644ca11facf630b087d6e3ab3cd4b8d4eae77896  agdasima/regular.ttf
1059370a8c1b1054b32ae5b9415e2a35ad91a29268faa2d82fa02ebde12c7139  agravepro/OFL.txt
2fc5eb1c6f3004b2842424230f16b2bf7e859b9310190a6db23604803841388c  agravepro/regular.ttf
06d81dbbfab7578a8e9ec6692235c0f4e2503e62ce46c6854ae5ba28ddb72709  agudisplay/OFL.txt
27ed259a81a476a354abc4cf5b31717241a57db1e6bce24453729214930c96ee  agudisplay/regular.ttf
ca8b6e93436590a2e4efe58431345c0d5c00a43f1f4412c7cbac650215933ad9  akayakanadaka/OFL.txt
7891840f8c14326220aafd73f599f592bf44c60e4f8882bcf7c57426d62e9427  akayakanadaka/regular.ttf
c9fe51b84ce71b4e8bd90eee48812942694c46f8b8c89207c0fc5579727d595e  akayatelivigala/OFL.txt
e57498133912f5abab1651ac44654fd67ebefebb489052748587b4ba33e182c2  akayatelivigala/regular.ttf
f15a9a3a9a665c2d17655b8fedad86d9a8f30081d46bb91236beb1bc7294a589  akronim/OFL.txt
b5528ba2b9d60b90cbbe06e587655762dc518616d2613cbdf616751beaf7e2f8  akronim/regular.ttf
4729f442cd70ffad4e4655b86f8b39cee8caf336ac3efc26990293fecf1dd46f  akshar/OFL.txt
320e19960349d8e7257bce325d5db07aea4f7c08bcf143b0f44cedf7227dd63c  akshar/regular.ttf
a27d7054c92711c58325a652f1968c92d1825a48bf745d50df802ec3d0ebb642  akt/OFL.txt
3da5013ec56bf5a83cccd1d5601b89fa58a6cda5b3fd0e5f8d18ee3690272c05  akt/regular.ttf
06f10277275c9263ab3de42df06607bc983332fd6f8a67130ed7058151b8f512  alansans/OFL.txt
96e93ac16fd488698a88489e297a5de00b2c5dbd8f20c298ebd4d3acc4421b2a  alansans/regular.ttf
ca7f9d453fe14052245af446203a47aeeb177f64ba5b60932b155a8d8a431fb5  alata/OFL.txt
7b71432a5e2e2409a3583553bc5ce703209a8bce9b2f136ca257ac4c2d3addc4  alata/regular.ttf
2c3849ff305df315fe85b7b328fc2a926da7be9c54340285a0e9fe2e1df89187  alatsi/OFL.txt
16b62400d74df555a35e145d0d8835e4f06e6d5c4707a8d0faf76d4e99910292  alatsi/regular.ttf
16eb3291f7389045e90a00abb66a3d2bca1d03387b7ebbbc2b0cd9a094f86226  albertsans/italic.ttf
5c856c086e8743b84932aae46ced424729a703932b601e9eb8aaeac15a617ec6  albertsans/OFL.txt
8fe5d4cf5822d7096d4d17ad781c90f97c745ac13a22be619db74966fba45fda  albertsans/regular.ttf
de985adf63cff6b1bcb7c5cb55f1c5850fb1d36289d20a0e26d97a281bfcf956  aldrich/OFL.txt
bcabd8e6db3e8cb59242e8dbdef30bfd9b25be600e2e8f506618008f99138d47  aldrich/regular.ttf
fa915eec76227935dc5fb678953c94b71287c360928013cfdb441dfe52f5a391  alegreya/italic.ttf
f6f60d5d4cf4f4b1fc4e41353c897a2f5a16e6396c0cd8fa8bdfd2f4586a9a68  alegreya/OFL.txt
ba5564634b93a8f8ba57b48cd4f1ae7417d2b4656fbac779028679b00de3cf12  alegreya/regular.ttf
6a5550f0e4c3021e7e2e83ac4814e8c649a0fe20385489ce7609f00802097b4d  alegreyasans/bold-italic.ttf
a3055a1893759bdbd7504bb22abc583769e7974c49353176eac0b03792c9fb8e  alegreyasans/bold.ttf
f49f6f2bdd84df850b25b0f8185d8a051e1d1eb2dd08e2f91b8c7b86d9a9e1a6  alegreyasans/italic.ttf
0677891e6a143f297350d260ad766ad33bfc18ed5fa4f213acf648d6b597ec1a  alegreyasans/OFL.txt
8fab634196007afca839f1e5a6fb300976daff55d8528b590ef032f01b14ea10  alegreyasans/regular.ttf
66e79aa70b8375bac7df4acb0545c4b790347ce724546eaf049527323e4d4cdb  alegreyasanssc/bold-italic.ttf
1f7f1ca33c4ae013a94d374106fd4044820b3d915e7f7a22182ddaf49b9c7912  alegreyasanssc/bold.ttf
f5e231dd870cfcb172a90e4e5686690a59d7f30280fab8a6e89e309fc03f5e06  alegreyasanssc/italic.ttf
0677891e6a143f297350d260ad766ad33bfc18ed5fa4f213acf648d6b597ec1a  alegreyasanssc/OFL.txt
0c5d4abcdd83af0ce9f5d4ca49f226c2b3030d2a83adf92cb5a5c2638c8e68b0  alegreyasanssc/regular.ttf
f0d577301defcaeb5c4cf3d7afd88d878affd6749539e614b5d6d08a92c66e2a  alegreyasc/bold-italic.ttf
3ef96cbf3be7b84d9dff9b1aa1e2ac40eec0cf323ccd0638395cdef9c5a91528  alegreyasc/bold.ttf
1e89a8fd7ca396f5f7862be6d13c57fd28bb3b71f3294216b0b5fd5047ead9b8  alegreyasc/italic.ttf
f6f60d5d4cf4f4b1fc4e41353c897a2f5a16e6396c0cd8fa8bdfd2f4586a9a68  alegreyasc/OFL.txt
5c8fba800b848b851e308dfdfdc573b64135e498db41cbd0b6d78ba9d267d9a1  alegreyasc/regular.ttf
9b4c074d9f3e662ef57bbef82efb7b1bb5f757d579c91c4c0b831319221d6f8c  aleo/italic.ttf
f13013bb1f4887b67240ec2ec5754ef968a3753ada1e538b598eae375cf74273  aleo/OFL.txt
62b6cb49b7b087b341f0307ea3bc871a9690d8947691206ab025d149b8f6ed6f  aleo/regular.ttf
56372aed19c2701f50e6e784110af55bf8796ed51648805324ad1adb0a3860bb  alexandria/OFL.txt
db8ae03b62d55a65aa4e04307878df8c00d6e5388e4800635cbe0e22b6411b64  alexandria/regular.ttf
0ee34ce7c99b0deb7f7332bca0a4950d3796c23c00de77ada8aa29a4b55ff2c2  alexbrush/OFL.txt
df702038d8e27797230c77959c139eeea38cac0caf53e19ea5b513d3b0d3362d  alexbrush/regular.ttf
e315abc82a78710c7242e2f2e6529651fd631d4d50e6ad98ea194f9b54c3d701  alfaslabone/OFL.txt
28664afa698a3393bd5a29eec750230a0645c5301d62200e5f2d3a027fb2299d  alfaslabone/regular.ttf
ef643b6b82fb5c2ce056e27b6bf6908433a785bbb6ee6dc23c4739743f063e54  alice/OFL.txt
8212c40f10b306af9b82272ae68314de6964522b6dabf6abdaff647e74ac8b58  alice/regular.ttf
c603ca21fa5822972e3e60a780dadb7ba7494cd4f69227dd098172f5cd6b9108  alienblock/OFL.txt
377e2a998a5b19cd937ab37483a31b17b5b52434c5065ba6751d7a9f38f75a4b  alienblock/regular.ttf
9c63835765bcc42b59fab82a211b61a8cea32f2abd7e8bf288d4c84463adace0  alike/OFL.txt
accb24221880fbdcf8e8b23fc341ed43c6e0cc3cef1dfbad57ac72474dc1e512  alike/regular.ttf
fb5d6a8310a52ccc2036f1c98db07ece3a9f167d9b3138e13452fefc4c865fd9  alikeangular/OFL.txt
3706438e11bb219d6dbbb19958b637dc19470638da28fd97a620f7d7069bf448  alikeangular/regular.ttf
5985658cc7672eb25b95427a485ce922402908c90d9feaca2a88930cd98e54d9  alkatra/OFL.txt
af6d39e8085eda5db66b19100571709bd41c41938400f2c365dadde86dd28466  alkatra/regular.ttf
c4d3781233b873ded3965200d4ea3b978ede2d7300d02c528da7a9ad9e7946ca  allan/bold.ttf
ab721b35816e470fb11619ad3705f75d08dccd0864505e3d782e94fd937f6620  allan/OFL.txt
1216633f30f55dcfbe27f1f3a882a742ada9484a26ed26cbcf208f88e315b896  allan/regular.ttf
75db6ecda0911c52cc92b7aca4b7eb33120333e664851ec2b57fc6330f9fd84e  allison/OFL.txt
990750bc970472808cef2fceaed3424c922e781aee99e57907a68a9932d3a066  allison/regular.ttf
c8cb4c94a558b6cb82ac5dc981a73a0b8aee35a5c52c8a7832fc0280c289ad49  allura/OFL.txt
9c142b2e515832c0dfc4ff8b8ea18f40314943bf937b72e2b23c4661bac14cc6  allura/regular.ttf
06401391b5b39fbcf2bc0c6a6e03faf992435e7b011183a1861737e913af8613  almarai/bold.ttf
142e053c374dd465a92bd7378116b517e344dbc662361308130fc2566db30c2a  almarai/OFL.txt
5b5cad33c8e5922083728d271cdcda91f96ba291f1307eccc4f4ef732dc19622  almarai/regular.ttf
10e0a7dd4b9f5ad7d51be7f8ee42d76919c322dcbb7733dbad48f4ac751cb105  almendra/bold-italic.ttf
5895ef04d0d56c60083ec302e72db99b952b044ab2b440ee12283649b5edc971  almendra/bold.ttf
972eb95dd030592755064c35e8e394b75423973d0b7dbfd759c7e36ef80bb7cb  almendra/italic.ttf
b7eae5e3c3447f70caa14e0c43f5e0d953f54ee59df406f6362863bcee1a0a95  almendra/OFL.txt
b127a6121209353b53da9ce73bf9d350f74190d8384c28ede179e4fb9440f946  almendra/regular.ttf
b7eae5e3c3447f70caa14e0c43f5e0d953f54ee59df406f6362863bcee1a0a95  almendradisplay/OFL.txt
04b543a9e7bfe39262e47d47ae7ec6a04166ce2d05383a911b256cfcb783383f  almendradisplay/regular.ttf
b7eae5e3c3447f70caa14e0c43f5e0d953f54ee59df406f6362863bcee1a0a95  almendrasc/OFL.txt
dca733b5b03e4ea52c666365777c8f6b360d55de04efc9d834cf9f82b68308be  almendrasc/regular.ttf
2ad29364c0841c2057eee44b3d13deb2af74d3f13e14bc519a8dfd4142c1ad54  alumnisans/italic.ttf
08e1c6fa00b198f9cf90fd8c7f540ce400892063234d5a3b38dcae9f659c977f  alumnisans/OFL.txt
9255d5201c7aba5bf1bde1e8521f0fee691f0588b83f40db228a5f9bbaacfbc4  alumnisans/regular.ttf
aa1ec3cafa94926b00e61da029c48271e6845400167c10f8b659b938da9d54ee  alumnisanscollegiateone/italic.ttf
2b0ed87071361caf613d6362b46d7289037f1001af3b11ab747905692f87025e  alumnisanscollegiateone/OFL.txt
9bd48b280391794c7a5aea97476b25051b4705c7963e4b63b2c84876db31b59b  alumnisanscollegiateone/regular.ttf
e6a3630296c51921596647bd834f7fbfa5b04fe9335e4b33ad9ee702ac8654d7  alumnisanscollegiateonesc/italic.ttf
2b0ed87071361caf613d6362b46d7289037f1001af3b11ab747905692f87025e  alumnisanscollegiateonesc/OFL.txt
dae9c9d91919a15c3bf226538a5dc2bab1bc108d685bdaea3232979cc100de53  alumnisanscollegiateonesc/regular.ttf
ba98fe1a9aa70f60417851b357882e0275a3f586ff4039c8f258b4af638171ff  alumnisansinlineone/italic.ttf
e7ae596600908a4ba9634d03b8096fe3a5445fe692b3f420d7490512ca0e8521  alumnisansinlineone/OFL.txt
e77a9db5e63f9316840cab59d1364cd40334d6cd441c0b43fe2a18b2521e0e7e  alumnisansinlineone/regular.ttf
5639e0d5bfec3719f127139d232c60c42aa3ae661b580e405e6a9b06002ab6be  alumnisanspinstripe/italic.ttf
855c8e5b459dfa20361af32b393bab0c18f67f888ee7bd69d54318cbefcaa7fe  alumnisanspinstripe/OFL.txt
c00bc8d641f2ddc444bbb9a07125f4eb1e6eda0384a896196ad0c7be0a9cfeea  alumnisanspinstripe/regular.ttf
62b490f2ee301d2dda0554f4bfc68ac8ab905d89762716702391a49174554a26  alumnisanssc/italic.ttf
08e1c6fa00b198f9cf90fd8c7f540ce400892063234d5a3b38dcae9f659c977f  alumnisanssc/OFL.txt
41a67970fd2a6f6a806578451d7e9902b45008043de2d60bf47e005ec0dab922  alumnisanssc/regular.ttf
9034b97c728d88af36129932cc8d6a544f225941a2640e860686fa2f44239294  alyamama/OFL.txt
f09eb4ad2eaf1b0a7c990cb9b3b7658414405804d74775269fdddc25efdb1883  alyamama/regular.ttf
89bf0833b785c49b0f271273ab440bdc20c85bf0322537dc901df940bf1579da  amarante/OFL.txt
de5eb7cc2b13632fe3f9fedbe4dc34571a76758cfb52b71fdace8fc4a7638a2f  amarante/regular.ttf
e8fc151453806c6aaed72a40bacaf3fcf380ccd5d852de08bd686e55ae70464b  amaranth/bold-italic.ttf
2ca9f93499ad3af5679afe2930170fd00c50c2fdaf0240c7de976e23be5791dc  amaranth/bold.ttf
6c96bda248c8ed3ebda63382cfcc233a26213d87d457a5224b79a0452aff27ea  amaranth/italic.ttf
5eca89cdd576df5e4b7c694e0425b126a9ca839aa067df85fab33904a8187076  amaranth/OFL.txt
49d60587db044af5158afe373bfa6204d8dcce647ccd4f1f1c61f560980554ec  amaranth/regular.ttf
b5ef66a2439aec16199373c0feef9f8261f5800eb0514a556576c112309ce3c7  amarna/italic.ttf
12d84550f6bcde9c4f5c4e1c0adccc10ac50a9053ef328c3cbeffd0ff4effe4c  amarna/OFL.txt
257f905b7a84302726995daef4aac1bb62c94171b8e29803d2eeb43c3d105bd4  amarna/regular.ttf
d367beadee66efbb657d24d3d8f30f3b60633e9d5c8ded7385541cf775cabb4d  amaticsc/bold.ttf
301f77908df2b00141b4dcea50cc1a586c3afcee78843bd811088e8263623f9d  amaticsc/OFL.txt
513a76f96d39a5366bd27c258674aaea35ee51c42b8f3060387f74649ee8c8aa  amaticsc/regular.ttf
70d2a2e9eeee950c666f5c94836e9fcd3fd3297d1975c952db2518d0e5ebc9ef  amiko/bold.ttf
bd8323cd1d2b6bbdfbbf99cb41ec1156d0352ced170de4aa3a96d95e6e20bf5b  amiko/OFL.txt
402d4d96034762fee68518fd95b778cf6a9d70cab838fa1a817cb783d39639a4  amiko/regular.ttf
241300e2dcb2c541ac3617872960d99683d261e4f526dc4691d0727e7bef130b  amiri/bold-italic.ttf
cfccb794268e7d573d857e6d6a67f89cf8a053e8ffd85dfa0c8ec1bb36fc4827  amiri/bold.ttf
770e4da44d0459c0ddd6484483d475b95f2d088dd27ce472427624081eb68c70  amiri/italic.ttf
72de68e5954f4fdd24702292ef5a32f003ca960ec9330dc86e5eefb5dffb9b22  amiri/OFL.txt
ab391c4147d054c48976e98322ad0eefe1427aa0e0502a12a4c75d80a70cfcd7  amiri/regular.ttf
b32e3b24e2a943b8acbf6ab8d5499bfed737d5176091b7341a8c1e7fbcdeb0fa  amiriquran/OFL.txt
e2a47644762d16bdfb6d33e0d8db8c6ff30beae84150ef5a705316bbd829455c  amiriquran/regular.ttf
2e3db0a183495cc55b81346311bc2c22dde0e4b6599a9f8a7469b5feffdbf0e8  amita/bold.ttf
0dd8e32457e18621737b593ab0fac49905cd948a078ed0e64f4890df714a1dfb  amita/OFL.txt
551369ea6a8caeaa9d2dc31719564ba2379a445d16e6994bc7adbf9446a2b63d  amita/regular.ttf
e8a1cf20882d0cc27d95d7b5353fdca6a2a925a7de441e2ff0770881f8858b9d  anaheim/OFL.txt
4dcf9445d6d6791377da5079771ef565abf19a1d93869d6a46dcd5341944a058  anaheim/regular.ttf
834be8cfccb25c8fdec55908fdbfb3fe682de616688e10e502e22c29ecd5933d  ancizarsans/italic.ttf
aeb148248b2b404e2192a9b07c971cd3a7fd348fc334781354fe774fa5889a28  ancizarsans/OFL.txt
c99ce8a9cd997f264e6c34c2799faecd94c39acf7d06928124f9e7c12d72c743  ancizarsans/regular.ttf
b30f075790e14795508a42dda7b8f6269509e15a13a4c653b3665662bdfbf45c  ancizarserif/italic.ttf
b15d6b75ec5ada62baf3737ffcab2ca72d1126c3067b07001802f9c8df829caa  ancizarserif/OFL.txt
fcc35d7fe2780846344d7187515d483bb69f3d9bcc49c4833a219e4d9109db98  ancizarserif/regular.ttf
8544abeadeeda80d70201f444621678ede1aeb140a96d26cd7113bda771ef831  andadapro/italic.ttf
34f84fc4cafb1090f253e429fcdd72e9adb059864edd5ba3ba19ff4f0586769e  andadapro/OFL.txt
4f378349c5e7a6c0e6d93ff3cba92a2ecf2217407a0b633ab6ac807c80ab20a3  andadapro/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekbangla/OFL.txt
8b4ec2eaf7400ea9903718a4addf3135475292e6e0b04db7735d0f999289d919  anekbangla/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekdevanagari/OFL.txt
b88cf0ff5705599b2f16fce4ba9ce2029f76106dd24f0419976c417d89f20888  anekdevanagari/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekgujarati/OFL.txt
7d68cf90804e69cd23717f9f5485f4ac10b660096ab0b406e86f32e09d96029b  anekgujarati/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekgurmukhi/OFL.txt
40d72129eb332d7c4fafd25e80a30d2ac11f45e14a1660d6f7bacbf9c800d7d5  anekgurmukhi/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekkannada/OFL.txt
6808783ecb95edd948c928ff394953256eed78bdb71dd1fd96eccaa4da05a330  anekkannada/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  aneklatin/OFL.txt
ef7077abf2166add6ab6a64b4a4a4407859bf4f9e5b9058b51ac01ada136b295  aneklatin/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekmalayalam/OFL.txt
319ccd3dc61afce2a5f2e5f3ce16f555c1f385390e80d12af7b9d017dd4993fe  anekmalayalam/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anekodia/OFL.txt
673bb6e51b71af1de1f11f9a547a3a58c50a6fa32d480958e1ef0f06980ca45f  anekodia/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anektamil/OFL.txt
4b2bb7d91a001180b88862177ef2901e027e6428dec7f8e269413db51f550013  anektamil/regular.ttf
de62be758bba267e653a5f457dfebb4680957e2c343eb3e7de15aff4746bed05  anektelugu/OFL.txt
25981968a8a3faab975993a54eec455829214390821037fb3a4d6c447d2e1179  anektelugu/regular.ttf
ffa0191e03e3d94d2269bcdcdbaa31cd5c7dc6aa189ec531de939ffd2a3a5f09  angkor/OFL.txt
ef3a846370cf0a5f6d5718162cb9133a1a9243586f32faf6cdbc449594a3dc1c  angkor/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  annieuseyourtelescope/OFL.txt
221b54062adb0df36d4b8f0d2f98aef4f827fc34b974cae2ce232a5e233149b9  annieuseyourtelescope/regular.ttf
b9ced72fbc4812b7dd2a67fe4df3ecbc0a75a7f43c0ffc4f0873a198d8b8431d  anta/OFL.txt
9f3b9723a50c1244d49906b1892b3aad43876ab9a2de80288db47821b0c7b298  anta/regular.ttf
60ddc0ee6e443b78940b5f92bcbab76c98ec6965e0da9fbdaf267383ab72bba8  anticdidone/OFL.txt
63a560792f0cb5342c0da7759c9df2e1ce0324a8af46ae976d9458fbcccbb440  anticdidone/regular.ttf
22d1914919d3fe08b179dc31169fc743ca7eede7827b91a5d48c23c8cdc7cb81  anticslab/OFL.txt
bea5831a412ccf18bf34612a575d908b7892c4669fa91b80405cba508fc32a56  anticslab/regular.ttf
ee67e6ee22790b7929f1a3769ca2801d565c64b5a9096942c1adf5596de9c9e4  anton/OFL.txt
a4ba3a92350ebb031da0cb47630ac49eb265082ca1bc0450442f4a83ab947cab  anton/regular.ttf
ae9a754b006df720bb6721e7b78c04990df734f87195c6033140fceab60bebf6  antonio/OFL.txt
9e95a2258ecdf3e45c72c5bbea1c4cd350e8f7bebc87c9dba53b29b1890b8903  antonio/regular.ttf
ee67e6ee22790b7929f1a3769ca2801d565c64b5a9096942c1adf5596de9c9e4  antonsc/OFL.txt
a38d04953f7a3878d947381081b2b80c673dec58404878702788a9c81a944bea  antonsc/regular.ttf
cbc57ac0dddda1b70f246a16358fc3c2a32628a23a6d10ef64f746141d3fb159  anuphan/OFL.txt
7ec47ebcaa9d6459d974691cbb42fae52e1449478a607b071bfaf3ccdb433ce4  anuphan/regular.ttf
f9a465a1e5af36e30c37ba11812e4763e3c37febda2c2244acbcec8092063fd7  anybody/italic.ttf
7f0313b042b462fcae1934436cc747f9fd4433e3b08fd6459a4a5104b0bbd5db  anybody/OFL.txt
b184bd7e6ca8348bbaecec98951565729d7e89b7872d4898a1f9981342b5b64c  anybody/regular.ttf
c0093b62824cfa8786df613c00a316fa483bdcb7ccd11ba5faca006bb692f68d  aoboshione/OFL.txt
3d197454026eeb34ee409d0d7eda75a8c7ee654a8dfa9c1a73ada2d9e525b7b1  aoboshione/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  architectsdaughter/OFL.txt
6159718a08898e34bc1cb7354086141a5f9a70b73e54dbec27ead0d59a697359  architectsdaughter/regular.ttf
305d13b4eb80e62f7d517f78d7c045250d977552a420f2dbed906f314e761305  archivo/italic.ttf
108b4e57c9c796d3d38d0428ca7ee39de47ad93187302718d9b2d8864b9b716b  archivo/OFL.txt
0e094a7d3c7c4c25cf1310c4b30014f1dae9332220b1c2c88f4fa996f0b05053  archivo/regular.ttf
3173acd82f8c6159b5b1037b539fcbd4edff68e65c2ea8b9412b5a5ca97b08ff  archivoblack/OFL.txt
dd9a89a019b4849f66ab75455fe7bdf931311042cbb0f0f97acc061539703180  archivoblack/regular.ttf
147c09214be086bf1c70311ffb66f4f5a252e48f828f1d49e35ae56951016cc6  archivonarrow/italic.ttf
b2087ef3fb91248e346600d19021249152a9688efea72905aa1996bb16a4c8de  archivonarrow/OFL.txt
adbe027f625c8393ae0f6e174e32e233dda485bc3eda5153ce428275394ef97f  archivonarrow/regular.ttf
424875d518bd5175f201a74349796121c959f9c095f960b9d57521612a77ec7a  areyouserious/OFL.txt
e2f61a166f382d7031ce750fe31d9a6d009a7dc8b63aafe4feff65e5cb4b3874  areyouserious/regular.ttf
aae6749568fe746a578b16cb6ca8ca9a22729b0c738254e17c21b23a61972bd0  arima/OFL.txt
c6b0db0d4343e9d08b8e79f9c6f868576c94bc0c839d349535f030b011884e45  arima/regular.ttf
a80fc54fd0233c1dfe298577c4d00f5ae81d5bb83510975e473c47e699b7f4ed  arimo/italic.ttf
11cce536cd2f3864d767003af5dcd739e2e15818cf2279b6175edeadd3960992  arimo/OFL.txt
e43898b143ec826ac8cb4034816458a7047fbe0836558de2a1f8c6223ae3e0ca  arimo/regular.ttf
a525f5a38671cd1a5e0071968fe39c8a135b4f42d412a92ab9cf970923332430  arizonia/OFL.txt
8df1c10bc15d0aba145d4599c25cafad83db686d2cefa42619f069b6f1bbce62  arizonia/regular.ttf
c1bec22a6baf0cc6365b3f049694559f171a92ffa6eef2ddb26b0950ff6a4693  aronesans/OFL.txt
235b1352c58fb6d9763d74711d7c2e1d726d805fc04cad8fde2f56a469566b5f  aronesans/regular.ttf
276c72baa7fc670e03c2951fb10be5d75c3e0c852111a10a84c8e0c739fed90c  arsenal/bold-italic.ttf
eeaf97f8df9d5bb69c8db23f7d2ace61b6e4eeefd99c1a226f0577a0b3a23fe4  arsenal/bold.ttf
3e38a69ce81ed89b8a1fe20cb1eecbad762aad58c122ea8438bdb8be40ed550c  arsenal/italic.ttf
a94cfd8d1f5c33f9a7506def359b907f3313f7008bb57fc893985963cd342f8f  arsenal/OFL.txt
544784eccc5405570c8d91419739a12c2a9ee7cfc947715cee51fa060701b4c2  arsenal/regular.ttf
f2e9fc066073bff6dbf4b99af102e9f303abab11886665df0346ffb3c54b090b  arsenalsc/bold-italic.ttf
a06dae429de1ffd9de35b290bd0bc2cafc6e542390b118ab95f5414d2d99414b  arsenalsc/bold.ttf
e384e807ddd1888db1ae39fb96df3065e224b6d975dbef972e6697a7249547ef  arsenalsc/italic.ttf
a94cfd8d1f5c33f9a7506def359b907f3313f7008bb57fc893985963cd342f8f  arsenalsc/OFL.txt
56d7ae5099045e6b04a963156f665abeb5cfec2b55af0ddec74af6564bc7af47  arsenalsc/regular.ttf
3cb7c635ce885c1410af5cbe934d1a89b05055635a53a0a5971db5edc77a4ac1  artifika/OFL.txt
51d5e3b59c907938e11964306dcd13e4e4cd413acac7dccce4f81860d1ed9f86  artifika/regular.ttf
96449d0ec5f452f56c05fd3072115435f41ed3f78d362444b79a8379de2479f4  arya/bold.ttf
dd028a807788d5e22e9f8cc18f026cda23369954673658f2ecc7d30bdb364b89  arya/OFL.txt
b02bdacefe31bd544f9332b9b4244168ec23e18be395a573e08f484c2a778879  arya/regular.ttf
a21e12f9babf2d02526003b27dff884b6d1cd0fed883ffe7740725626a11dd59  asap/italic.ttf
a6f4d778db0d2a87c2c6e560f71eb018b4253505b2f23c108724dea5d4d74ed0  asap/OFL.txt
7bf29bcab72f7d00de600e964a3fc206620050d8448ddd976822378d0fe18028  asap/regular.ttf
a67d4459760386ad033b452a1008f5f34a5b21c7b73445038589a176c00982a0  asapcondensed/bold-italic.ttf
0ed4b4f29a0abed3a5049270f28d8e11c797edc7c0270cc51495c0578622f82a  asapcondensed/bold.ttf
e3d24bd65328b2906d3f076b84c7291e86799fa5e767890e7520303e71e28353  asapcondensed/italic.ttf
a6f4d778db0d2a87c2c6e560f71eb018b4253505b2f23c108724dea5d4d74ed0  asapcondensed/OFL.txt
297336aba664e16c2c6aadb64a66fb31d63f048eae3d22409492cd2f1b4cdda0  asapcondensed/regular.ttf
6d79e6fa638811249e348a5265883818d75829db0fe84408bb2c7dd9d373d93e  asapsharp/italic.ttf
3f0a89775c7933112b55fc351dc864683f09e9ac4afe56d36f81bf5dd793f146  asapsharp/OFL.txt
0c5f2706889214e8102fc97890e34d5f3a02f5203c198c7711987efcf6124e23  asapsharp/regular.ttf
223fa23e8419ee762c662e0faf912dfcf386fa7093ac9ff690e380ce1993ba55  asar/OFL.txt
8b4147354af009836d031f50af3e0450768d78b1e0e0281c7df17cd26440cc2e  asar/regular.ttf
26e2c22734ef964801002595098bc0473a04b14112f9a003acb4959c3dd2046b  asimovian/OFL.txt
0ca907ed08a2d43785fabdda6be798771cce01df266e6c42a8dd28b7c36ea5df  asimovian/regular.ttf
14313e23f0e8f72849f29306b73e878001a77bf3a22fef14352f9800357a3827  asset/OFL.txt
1dac444192904730f28fbbb10a5ca7a629fe38e4717e026fdfea50ed69bef920  asset/regular.ttf
dee95fb52f9b24afc701e9991208275f654160870db06bec84cecb25e10fbeee  astloch/bold.ttf
4e69611ba5017f1fde74c31d342f5c85604814b1b45387b9ab46205996dec38e  astloch/OFL.txt
1b6f98e4c391da70d9166182369f90164cb02870ad210c4b3287f35ff28227f0  astloch/regular.ttf
164aaaf1c046e834f418bc79ba5ffe636c79c2a26ec9146e1eaf9487cbeea833  athiti/bold.ttf
1d08c63944e639bbfe8a1b81e3c6a63836806c126b3573b9cda0db83fd27ffe9  athiti/OFL.txt
666f5474258cbffd537b494e2d6a441ee849778e2175a4e222d4d625c6efe0e5  athiti/regular.ttf
7a46f1b0ef2f64b61065c1a6b5a11fcb9b019b44062d88ba121a083cc39e86bf  atkinsonhyperlegible/bold-italic.ttf
5a3b0c8cc8ca545155150b4512a1fa248298df121c50d6557e651e61fbdab92f  atkinsonhyperlegible/bold.ttf
021beda4d3c6edfc78872e436d74009f9a1bcb294331908fe5747c61d3dcc514  atkinsonhyperlegible/italic.ttf
f32d22b3908fcad2c86a74000614ec22e6a7f66ea7e867e616026a27aebdc143  atkinsonhyperlegible/OFL.txt
7fb917c89019896d0b52ee84b7cbb3304c18cb90b19a62f5e32712bd23e97669  atkinsonhyperlegible/regular.ttf
e18f523877530e4abe229df6a36d394326254da488a7f5abb9b7b5ea8f780cd4  atkinsonhyperlegiblemono/italic.ttf
1ebb31cf7393164f20d10c1d48406cddb5314feff8465531cf1e4ba37e9dd740  atkinsonhyperlegiblemono/OFL.txt
5ce8b1698d1ded7dff2178c1a3ad159470085a58ea239e8b2cb88f4fb4a6f646  atkinsonhyperlegiblemono/regular.ttf
ce9cffed32742ad2d9238c561a93220385e5934cdc02b8eb4097a50efa957dc6  atkinsonhyperlegiblenext/italic.ttf
aca6a428580965d2297d1b718042dd427c2a9443ece3b0d02d758e161e0c4030  atkinsonhyperlegiblenext/OFL.txt
5a455d1cfa099b601ab70751bb9673e8fe1854dc4500c80e1a220d0d75e31745  atkinsonhyperlegiblenext/regular.ttf
d55399f5bcdb78f60da7dbd6c5abfdc92510154361586ad1b07bca7ee739dba6  atma/bold.ttf
b33974ab59e6a711a6e88ceea258abb628146064a1302ab35b87a60689637e17  atma/OFL.txt
3ddd9e02b4b6077b25c07f5d1f4411c9071e5030a4124d77dcd5a04fa292b921  atma/regular.ttf
96d82a96abc02fb457ddde0227833dbde9d1d02876c91f0a4e27845ca0d692fa  atomicage/OFL.txt
5ea6111180af882b0799a1e1c04b7acc557807ff76e0cc24258b259a06f67ed2  atomicage/regular.ttf
071a0917e2aca3f11ebb24ec0a01b85315d3d07787b1e273033708f5faa67fd2  aubrey/OFL.txt
0e5d5bcacda38d60d25b2c61a2b7130a91d20f0cab28072fccf29185fc2c3176  aubrey/regular.ttf
4fe01b13ffb41faa8f030d84843a95dab32792dfeeca7c072abbfd3f4d6896ad  audiowide/OFL.txt
c7c0f2b0f6fad8c623e31772ce79f94a4edb9321ffce9fce978ea892d20ae730  audiowide/regular.ttf
793891edf1f4f4f35b52fcc9706b03f779c7ea18ab8e9e441242d63ef0279488  autourone/OFL.txt
6a3f5bf27e9398c25bd8c4edaee8bd503d8074553537a2bf3b1d724353aab252  autourone/regular.ttf
b8397dc8f7ede718fda9a553018d3dc2e90db99da53a85cb644204ce4e629844  average/OFL.txt
f9efcc21a222870178c86d2d47d3861a40284d25acd28657554f646f68902e34  average/regular.ttf
37d5360d8d2433689e78302a93cd88e9add8a2294046476625edada2d4328deb  averagesans/OFL.txt
f978bb0eb5ad93b02f3a8e4ef0ed525a1192b4076e8a8d0bb37b2546a297762e  averagesans/regular.ttf
d8fef266d11964b6420c89ebb76706a00afa31c80e58d0510db928a65a05de45  azeretmono/italic.ttf
2a0fd31798d131b38a9fe730a260bc9a1d85452e36cdf79e5fcaf937bf4d9f86  azeretmono/OFL.txt
f13962c26c1baa864aff7768364001f9bca6e506f41b9a3037c0d6a31e2ca736  azeretmono/regular.ttf
5911fe0ae69264fb74b2956fc66c616580cd392b47f29335fa68ce5db47a4d2f  b612/bold-italic.ttf
91749541ac7b2c328b58832b7e2c4df809d7e2ba38d62a3a5aa3f8e38b271814  b612/bold.ttf
57fd8a0d3c8baf066f21c0a3034af277887a0b17b8c18cbbcc1c642640dd149f  b612/italic.ttf
a815f65bc72d90494b01842d3171f7cb0f9f935e023d9cc260904d221ef1064a  b612/OFL.txt
139dce659100a83bf95b48474696e448bee95631ef84fd3d0437ced2bf33cf73  b612/regular.ttf
91a6a8535fc61354a2c59a64ea205a4f6957c2e09ac4ff91a1fc61d346c004e1  b612mono/bold-italic.ttf
b467b1d19fdabed42be51d87e38c86645ceeff2f828f294775188d00d1fd68ca  b612mono/bold.ttf
d58fa807e69d18159a40d5790d25772239df20167b50a0f840e9feb253002c9c  b612mono/italic.ttf
a815f65bc72d90494b01842d3171f7cb0f9f935e023d9cc260904d221ef1064a  b612mono/OFL.txt
b98cb96cc8a6206dae08c063d60902df7e6d40f86139ebdb97256704253c9c69  b612mono/regular.ttf
213ab761dccc1d47421dd9b88c38b317f8cb35452655db4cf023886b78b76418  babylonica/OFL.txt
d033b18ba66881e0f066ebc66b457944e0dc51e981f9be61c8365d4bcfdb165c  babylonica/regular.ttf
9c44c9cf5f348a3069f350ed032a55069532d66fb0d7cf958d09012667a88fbe  bacasimeantique/OFL.txt
7dac1e5f979df3deb933453ed8584a39099a38889d109c1384db1b8bab5f7d28  bacasimeantique/regular.ttf
22951d88e181c46e5f365191c3ffbabed1fd44483a7be71e416903e8b7c20563  badeendisplay/OFL.txt
274805b3ee44f9b45a99bdcecf25cd44944c0a81f6cf8086b5cf30d00e860537  badeendisplay/regular.ttf
0b742ad45c246502b6d56c62146011e37098978b8feb5970d7da313553dedd91  badscript/OFL.txt
40ec737eee65ec4efbc24ae636fa31d7d84d1ccca83ab54cd555edb72cb3eaf0  badscript/regular.ttf
4f40ab196ccf674056fed8b0e6d4f918eea183a149be8a67bff1239413ebada9  bagelfatone/OFL.txt
9286944032c5a9b20ad70940105417beae14013e0b4f5fc292425afdc4330245  bagelfatone/regular.ttf
e3ed3ad6cb257e16dc1789900707c5cd1cdef2d60d155389342604991cf693f9  bahiana/OFL.txt
75760e955339cd70012c8bd9577d373f8bdd4256a73f571f61a42f58ea26fe9c  bahiana/regular.ttf
d33d42f346e4c706291b3373b8120bfe5fa74377c6c858b0626e5dc4f5c29245  bahianita/OFL.txt
325f21fc723c962e58f895961c77ed151520baaa56e366c4dcaf7c8fcb75130a  bahianita/regular.ttf
afeefa87666738ec8689bb018dfc971a532c8fd9e8cba649d1be0176759d93c1  baijamjuree/bold-italic.ttf
74784411504a295a5255e736e0a8389892af2c8a14e914d3e194329b59279223  baijamjuree/bold.ttf
96e5f86f49442f60fd72cfc7728fde740870cccd3b8bc8a30e75dd8d9fc4b3b4  baijamjuree/italic.ttf
fe5e822667a4b2e083b8fdd7a37546163f26f6481b58742236abffdcfb3e6c71  baijamjuree/OFL.txt
72b5a30cb78966823eb326c09b9004b0d03b4bddcdfcfd1b8cdbffb6c414547d  baijamjuree/regular.ttf
f2f87c78860447f0bba5f99a1ff7c7e53cc39ead09bc7f130432e58df66be8ff  bakbakone/OFL.txt
238dd2cf76f0fa33e02ea67c2f9697731378ad567503ca6b1f778778093ff84f  bakbakone/regular.ttf
f916a0e34635667d5b9828401c10d461bb29780beddd45c30c5dc25c037dffbd  ballet/OFL.txt
6500b6abb6dd31c3389e8f32a21ae3c66e3257d0afefecf7688aa23f742cb677  ballet/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloo2/OFL.txt
d47a6852548059b1db49a1319d06d499d546c3fa2237cf9eee9c43c8abb025c2  baloo2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloobhai2/OFL.txt
b85b68f85cb82924b1647b3eb74ebc75301aee4839eb87ee8f03d600d446b304  baloobhai2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloobhaijaan2/OFL.txt
3e9f07fbc796c0ddcb3e6e0aa26f9c86741d9f5b7f5cb72f4ed3c06e55a19336  baloobhaijaan2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloobhaina2/OFL.txt
d22904b7337723201c910edf70be2de6136ec65be366f2b0e6489860f1343f04  baloobhaina2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloochettan2/OFL.txt
8f0de4f81b40d314a129c55a3a9e58411868ca9a452edb57537488853f46db86  baloochettan2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  balooda2/OFL.txt
8b62a8c4dbe659be5e4d40c19b7b3012120335b333205c5aa101b45cdb449cff  balooda2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloopaaji2/OFL.txt
44f70c760b100c3073e2e1287d4e1e745a96f4e4082e67236882ffa8c773652e  baloopaaji2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  balootamma2/OFL.txt
364e7b33fafe3f94eb121b4db36423e1b0fbef278af0b1a8d3643c65567b9d3c  balootamma2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  balootammudu2/OFL.txt
4771a1c50423a07f36919fac4d882cc0ac43e451faf043c8558d7a209298d56c  balootammudu2/regular.ttf
ad09b05dc8bc678c9daf7c4c5f7ef1f55e5726127f4330b2e98e40b9dffcb860  baloothambi2/OFL.txt
6739a11d3557b7426f0f43ce3a22ff6fbfee2d3be56ffb4df093d35d3460bf73  baloothambi2/regular.ttf
4999588a66defbf39e718b3edb0b965b932157bd8d1321130de06bec0cdccc75  balsamiqsans/bold-italic.ttf
a3302bd8424e6a37704eb5e20d5c5a3a2fd80feaf57e48a19d261f8e0c583621  balsamiqsans/bold.ttf
0a287472035409f556acd66c1c926047ee9829a62f88b0fa273591332a8606df  balsamiqsans/italic.ttf
0e82859672e549fd39554e2bfa97b5511e81f4f89394f2e696666d36b5d52144  balsamiqsans/OFL.txt
fcc9c00a9ad6e78673fa84653745569097241d99b5d1387a23f395858ed46b7e  balsamiqsans/regular.ttf
630dd5a307c0657b094d324e069b390edf90182fe5003639e06c02a0e5769af7  bangers/OFL.txt
4160a7311de9342674cce9160cde9fcbb30f48190397d86ff1b70b455af65824  bangers/regular.ttf
079dcee4a53544177f3b16354b27b40b521e22861a40084ab4d052f0289ed9e8  barlow/bold-italic.ttf
84e6a4d61e7c3e21f3c50ea6a4f7e5303a3467864c038be6ea3759bab8d547f9  barlow/bold.ttf
70cf45c354af39e55082fd506e748cc6a0a1812949875f99ded3f76bf691e4ca  barlow/italic.ttf
186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f  barlow/OFL.txt
95aa02c7c43096e0dd44d787ba6216864a67157e402adab59b35572e0c1577ea  barlow/regular.ttf
d8694f65cd70c3e5e600ead37657aab0adb5f63b275d0c1f6f4a7046de222145  barlowcondensed/bold-italic.ttf
e476562ec9c1e16cf16475895b511f08c804f438cc9a9f80a44ea50a0eeb5b65  barlowcondensed/bold.ttf
063615da0a64f318397de2afac330dfbfbbf4cdb562a9987cb72bfdcbd37ba7c  barlowcondensed/italic.ttf
186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f  barlowcondensed/OFL.txt
583cec5da3b84bc4dc7c9c72e2a565c94d34e431518b19d7e250b7830ad5f996  barlowcondensed/regular.ttf
65270ba022e056074b0b8f4a9e51a03b0df2e10d04700dcd0a792e524a87bced  barlowsemicondensed/bold-italic.ttf
5bd6757e459a110da81b44532f0f43058e2dab2401688abca84f2fdbde193cbb  barlowsemicondensed/bold.ttf
6ce28204c8a48369f254055fccf1784fe10ec7fcc26f84a300d5165ddfc0cb0a  barlowsemicondensed/italic.ttf
186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f  barlowsemicondensed/OFL.txt
e8c7242f612b13d026e18a94b63b0fd079e91a3faf009d1b6981dbb5f16d1153  barlowsemicondensed/regular.ttf
d90fb3bcba8c59ffd661fe1973eb4d39d9b70da666343bdd584d4b09e12e5204  barriecito/OFL.txt
ff32a099b68e0eb5e236adcb9a58141d00fbdf196586e421d1c6a0d1859f75b8  barriecito/regular.ttf
e2f2dc7a667954c16a919acff5351e8ea89813d10f5a7504e1f4668fffbfa14b  barrio/OFL.txt
6f86249fbed4d0d620bcfefda64a0081e15cf0c8c5fd2ad17db157b98b558bc5  barrio/regular.ttf
279ff53ed5c733efabb206345af87face1c137b8ab2667298d6cf228ebffbf01  baskervville/italic.ttf
93e68d5aa74b1d3194a26c3ad4003b14058aa488c4861416bad8125a96dcf1d9  baskervville/OFL.txt
a08bcf988383b344aacfd34365a8cd408a4a9665caaf19dc0d716a93833a0fa7  baskervville/regular.ttf
c70bd75ad8f4e4fd774a65cef5c0c97f9358944a3528505b875927bb54fa38cb  baskervvillesc/OFL.txt
cd2ac64e7b75f6c31fcec8b8c85a729f88d6b2987bdc0062d057f06904069304  baskervvillesc/regular.ttf
4cd10f7a56a7d9d1fb4184b2219821f8ad6f425be290243ef73c4ef3a80c86ff  battambang/bold.ttf
b7e7aaa1d798762d14374256ee62450bd6585f1ec9490a95368e90a90e425d7d  battambang/OFL.txt
1fd3eb9960911396cb7955f2c68afe5ee21c2c14f8097e945d05b768ed4de942  battambang/regular.ttf
1fb43cb6d1df2ba95e6757c4abe9037c9736f87127aded80d41e7ba82119f488  bayon/OFL.txt
ffdeb7ad5ca1abd37631b0a637aaa1b2cd695f85e582f5c75ccce26bdaaf51b6  bayon/regular.ttf
f9e9e63de5a83078dd630aff864065ca9fa8706d416e9e66bbe4574dcddfed2b  bbhbartle/OFL.txt
f0de1a96b31ed2ce012172dd28d4a5a7c3d4c7fdee84f32f311608ec4eca3431  bbhbartle/regular.ttf
f9e9e63de5a83078dd630aff864065ca9fa8706d416e9e66bbe4574dcddfed2b  bbhbogle/OFL.txt
e70fc533bc3c89d2742d60f1772bd0c933305f4a41ae4e9996d2799d37104376  bbhbogle/regular.ttf
f9e9e63de5a83078dd630aff864065ca9fa8706d416e9e66bbe4574dcddfed2b  bbhhegarty/OFL.txt
34ce60212aa1d835bf44fd61c9fc24092c9e34c1182dd91f2cbf41f69999af21  bbhhegarty/regular.ttf
072b20402dd2e98e819b7469e9ffc0f5e3cc42224e3ccd012494a8080198f516  beaurivage/OFL.txt
6a407ad2418a5e29ceb447de49fb11e614615de4943292e3862347fa010e7bba  beaurivage/regular.ttf
72082f6cb4d04be2ecf7cc7d9e1e7d73787f0af8a5a278a47cade70c16b78341  bebasneue/OFL.txt
08e4623805102d819f58601e46e345648846075e363b2ceb23313c2d1c83ec73  bebasneue/regular.ttf
3f45003d401898d732000102b547b92508fc804a6f613fe11bcae755f27d534f  beiruti/OFL.txt
c31f26b93e90ac916757de63c060370c5382457f85d50f64f930b96e5477f222  beiruti/regular.ttf
ff3fc9341c07ee4260b9f060d4b66b34f2b13d88a6798ac4ad3c8920a0dbc9b1  belanosima/bold.ttf
b2c0e5c91cc2a0e0b9594ceae858c9bf0cf41dca3c1d7d0f3c508d41db6752a9  belanosima/OFL.txt
fe5f8af7696a801accff91511c4feecb51bc49516465a5557af3b0593c67685c  belanosima/regular.ttf
2348c4852e6322105d130aa2addbe24c962e330094ad6dfbfd9fbd2281d76b0b  bellefair/OFL.txt
5c0cd4d526e6dfcb189106af6b5e6ec99a54efb6d458dfd61626ce6dc0f03026  bellefair/regular.ttf
355326d5707ff94ffe27711c7ae26217b63e93de6d5b3413292174fda5f5f9d8  belleza/OFL.txt
a88eb0fdf4e78687a40d3478e1c90d4d3079e8c0d7d3a2452488a3ba805bff1d  belleza/regular.ttf
82caafa69ed7cd8ab3723b2c8eedb443be908f9088e57ffcde0b5f0d38dc3708  bellota/bold-italic.ttf
2120a9b5c3c92e7fe7cf4e964e925ac04cb013c63ac72da4a756ae6ed872e97b  bellota/bold.ttf
8e1ae4d9fa4e055e9fc202be586f8a9a5bef81d8731bdd40bd862df2071edb99  bellota/italic.ttf
92938e2734b9280a9d4428c0fe4421b3e501641f78dafc7438fc19c0fc625c07  bellota/OFL.txt
d46806f9c5fd46cd6bf1c261bfa46b2d22503130d585451dc7863d8ce80524fc  bellota/regular.ttf
2af54d05da4a9512e3a50f9280d5aaf1c9d50f668658d1b2e820682cc53605c8  bellotatext/bold-italic.ttf
31c41c17d571900437b194300b5a9da384e366e22459d698fabe9f0be4355ef5  bellotatext/bold.ttf
4e04943e63ab256026cf2d0e506d16cc6aa7d5d891e63582acc250fc40992bdc  bellotatext/italic.ttf
92938e2734b9280a9d4428c0fe4421b3e501641f78dafc7438fc19c0fc625c07  bellotatext/OFL.txt
b10a58605747b85f738e3bbf9a5571101ecff0a398ef6620df9e9b4ee1f33f83  bellotatext/regular.ttf
5d3c445184569f424ed6d434cad16bdda130c5a395f79e2674f447cd5495cb97  benchnine/bold.ttf
460966d12f306a007930575c3b8bc336fe0c32f880d622af6d3b745a06ca79a4  benchnine/OFL.txt
abc1e1dfcfcf8fecf322d85bd461f308a68d313ab2a82f4f192d9580a82bb0d7  benchnine/regular.ttf
d4a77174d44252b564b086e4003b9e84c7a4f52859ea3b316c1242d813bbc5c4  benne/OFL.txt
681a3aadbde40f411b34bf6fb555971b1d6c1e979adf7eea5793f9bdd5ec7f3d  benne/regular.ttf
d941aa56e280b4f204272c4b1add01a8ebc7af3e8e69ba8ba9118aa2a5306dde  berkshireswash/OFL.txt
f0c80837dc6f32b89b10894a7e39295db4a00ab697cada682a3f5942c342fe00  berkshireswash/regular.ttf
de502a1ab6b06a63982dce8c9e58b3eee8aada175e78d5a4dc0a7b3721f26562  besley/italic.ttf
e8d81ba3b06080b764626d4385f319344e102ddf2c08bb4209412ac22d695f69  besley/OFL.txt
71f352d8859c787631a0978161d48497a72caa69dcae6996d6712a564df86c1e  besley/regular.ttf
7a71c720294f46b9de81bb649691930c7c340066385076fc643d5c4f82d510b4  betaniapatmos/OFL.txt
80865bcce14817490403dfaf6fd06f85753a8f2b36903d108f102979446dc5d2  betaniapatmos/regular.ttf
7a71c720294f46b9de81bb649691930c7c340066385076fc643d5c4f82d510b4  betaniapatmosgdl/OFL.txt
761c3d83f07517e3e6da5a25fa7b87fca3b52eb944c57c63a9a67fee74c20106  betaniapatmosgdl/regular.ttf
7a71c720294f46b9de81bb649691930c7c340066385076fc643d5c4f82d510b4  betaniapatmosin/OFL.txt
56212679126bc724725926529a147c600e6bee751cc5ccf3fee13035f2a84e41  betaniapatmosin/regular.ttf
7a71c720294f46b9de81bb649691930c7c340066385076fc643d5c4f82d510b4  betaniapatmosingdl/OFL.txt
732fa9eb8b97b927ac605e083285ab280f5679d40638b6b312bfa3c8131f6e6b  betaniapatmosingdl/regular.ttf
b54f3a872628c8b350ffe6b069078936cc23d9d3d020f886ea5867a000c2e2ce  bethellen/OFL.txt
ca49471aec90a19df63f583f5a60d514f012559a8a2d17f62f8a389fe90726d7  bethellen/regular.ttf
bdf6744e1a398c2bbf80e94a8195209759992b25d09863eefacc42de4c9caf6b  bevan/italic.ttf
578f12281f17e7dd88c9e553240243b29f4240043eef22093d32c043c4ab6dc0  bevan/OFL.txt
8d16c0920330f1def84e342ce70626c27fbf179b4294e6391b19301ff5873469  bevan/regular.ttf
a2a65bdf9b251beb3d658ae691889d71ce63c0290940c87ca60b449ceb0bdaee  bevietnampro/bold-italic.ttf
7f738fe5c43c8872807b20e2d30d42163618de8a4daf7f48a939adac32c16847  bevietnampro/bold.ttf
a33ebb3f68e0e260a7d3874d64259ad309971a2daf969e7ce5f444d70bce535f  bevietnampro/italic.ttf
6b7f8f73609a25ea78c891e34cf37b06f8a676b7ea986e941e43b009110f2a85  bevietnampro/OFL.txt
cd1ef6e9d7db28ad5cdb88a65ccbe693870e60d340b791f349d248342b4fe4c3  bevietnampro/regular.ttf
653b14a843954678d2ebcfbbc211d59edf10ea912a953ae00704230536e702f4  bhutukaexpandedone/OFL.txt
66b52f1013bf977571c08217fc851b9988f264b065be611880b90909fb3c274d  bhutukaexpandedone/regular.ttf
0409c6582424508453ce41648067efaacf0c790622918493d8f1d934bc5329a0  bigelowrules/OFL.txt
b6cef7ba51c1fbca920b531a39ac2c348023b5b9e4d35d1bca43ec801eeb5fcb  bigelowrules/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshoulders/OFL.txt
4b4b24aa6f799aa73cdcd5b6fa840cbcbbb38b81fa9fa82c25126a4530c1ba44  bigshoulders/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshouldersdisplay/OFL.txt
60e208dc276a1c35fc5b62e94f9fb959c40c11783a9eb7548175c14b1fbeb720  bigshouldersdisplay/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersdisplaysc/OFL.txt
919c655b8fcfffcb633f75a8c018d386d16f7d08365c86ed7560709dff3bfbd8  bigshouldersdisplaysc/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersinline/OFL.txt
417c1d07898a6648faa9e3a95d7302aa44ee614e2236a2b336e16922569d1fa3  bigshouldersinline/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshouldersinlinedisplay/OFL.txt
b0b18de4605db4fb9f8eb54c00e893e80342faa8f0e95b78126474cc32cbdf62  bigshouldersinlinedisplay/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersinlinedisplaysc/OFL.txt
11c816c179b9fd9cd87b81818f75baf0bd676a498803d07a26fa028d725627af  bigshouldersinlinedisplaysc/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshouldersinlinetext/OFL.txt
e1da2aa867fb756db228ba6d0e9954e1076706a4eaa9471fee8f255a4c30a13f  bigshouldersinlinetext/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersinlinetextsc/OFL.txt
28ccd62c3931f32c31bb6d34f5338f369a556b92cbb2ba6ec45d748c562c08ed  bigshouldersinlinetextsc/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersstencil/OFL.txt
758ec880296a8bdaf736a31fc57e90fa16673d8c357efc3c36bdb6582d625f0a  bigshouldersstencil/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshouldersstencildisplay/OFL.txt
93bbefb9f3a497fcfeec5d1ac85c4a947a32b8e5bcaf3b7b5efff52f1b11b0e4  bigshouldersstencildisplay/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersstencildisplaysc/OFL.txt
42e26acf67c9fcda467a38b63f5a7cd022b55aa96bdc4af249ab8058dd1cc3fc  bigshouldersstencildisplaysc/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshouldersstenciltext/OFL.txt
583e3423e62bb853b4970d7b10d44384d179d86e3e96a0bc54103cfbfb96a122  bigshouldersstenciltext/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshouldersstenciltextsc/OFL.txt
970efc1f8eb45174ae6fa7e14aa33449af764dc8f925d296e3b9aa1878b87e74  bigshouldersstenciltextsc/regular.ttf
338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771  bigshoulderstext/OFL.txt
fce6c5cf4edec9c9dfb3e7a0f60bef927c881eab72ca17d50fddf4b55f334ed5  bigshoulderstext/regular.ttf
fbc746aabf0eb1847dfd92e2efc4596d79fa897d60b8e64062a22f585508fb3f  bigshoulderstextsc/OFL.txt
3f02d35b7776aca0b00a85dae9e6500cbc2c8646c802f330376d089557b6a8d4  bigshoulderstextsc/regular.ttf
89ccbb54444cd2fa0ee25cceb2e67d3453d56250a561bd176983b169cdaf47bf  bilbo/OFL.txt
f479505c839db0c7a8be7108d046acca3d409a034b777514241cc6a2f9d818fc  bilbo/regular.ttf
b14f883330579c3373e41c7c0acdfde91b2e812edfe1e6c5af91bd32a5fa7d13  biorhyme/OFL.txt
3ef9bcf73838d59683b4144ddd4687bc9023340ee8e2bec33bc7b3cead65c9f7  biorhyme/regular.ttf
b90136544a46250d2c366d8fdb3268419f0433ba6a6c96998baafe0d17319a77  biorhymeexpanded/bold.ttf
0b7eae990329ac175a2e1c329060b3a4d6876e4e0cd7e5235511578352f7b191  biorhymeexpanded/OFL.txt
e75a7c996c8884d3d26c0823e7cfbf3cf404d27a36ddff715f6dfd95389affa7  biorhymeexpanded/regular.ttf
ae70628cbdffc3f7178e05a6c5ef0f94253e72eaa9c4bf109d50187151d16b12  birthstone/OFL.txt
cd04bb37f03d2e8caebaee2f26b09d3244bab7810fa348d8acb2e6a5228d8783  birthstone/regular.ttf
8214d2621f5a4113dd0eba60863e3e88916cd639444b519c87f6b6b652543072  birthstonebounce/OFL.txt
a03b6146597d467e794fdd4d61178d72f083eb93e9e86040a10530aaa1307ef9  birthstonebounce/regular.ttf
5e1b0cc60cbf479a1ce41c6b764fcb25160726485c6676db8e789ed4bab43e43  biryani/bold.ttf
505bb8f3c30f2006b4e02d250fda31ed94b651a35f1124a201ca1c405ce989af  biryani/OFL.txt
0b846b4f8600e7943a3a86a2f7ce04c20daa7d2cdad74c951edcc8e07c367116  biryani/regular.ttf
c214f3227a93a64c5b73d7e6a1a922c90803fcfb7312404fa2890c63f56fadf8  bitcount/OFL.txt
c7931919e67faa0e9cea2118f47d8f96383c580cc5cb6a3cef9aa1233ba3923e  bitcount/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountgriddouble/OFL.txt
8827445e53172735959d8ba11db8442ec5ffc8d8dc1b778781e9b5be5e20ffb2  bitcountgriddouble/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountgriddoubleink/OFL.txt
6da42b0c3bef339d827afcb4f8bf3aa90b780b18cfe752e468771757d5a42c4c  bitcountgriddoubleink/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountgridsingle/OFL.txt
f28e3429f64e9f27b32c6819a7f7b0d58164cf2716fdb9c3df8a5b35187d41a4  bitcountgridsingle/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountgridsingleink/OFL.txt
278c3a8da7298e23b9e93289c6a4efa9d92797aeb7d18f445d93dc0f3c08bb82  bitcountgridsingleink/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountink/OFL.txt
403901a91328663ea245241729e7752b28265b01772d356e2b3159bf3a628fe6  bitcountink/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountpropdouble/OFL.txt
c88b385f2f6083ca95b4108dac6b667f12e23c2b9738ec49d97332eeecfcef72  bitcountpropdouble/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountpropdoubleink/OFL.txt
f9d7628a841cac26d188776079b48bf843884cccc3952d51fdcc2bc6de0e96ec  bitcountpropdoubleink/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountpropsingle/OFL.txt
e6f39bb11077484a1becaf94b712331b5c2d169a27b4a4591f6ab70c901a8405  bitcountpropsingle/regular.ttf
c214f3227a93a64c5b73d7e6a1a922c90803fcfb7312404fa2890c63f56fadf8  bitcountpropsingleink/OFL.txt
eb6798670cd63a62e45bbae7de57e3ec2107b8b02482bdca7b01ad1a397d92ab  bitcountpropsingleink/regular.ttf
061dfb7681d7fff942e04f5217c40e05d2fe5a3cea6001222039fea4b0432254  bitcountsingle/OFL.txt
007608c704d41cfff140892070b71f31971ec6d85b9f8ad5fdd0d2625f517c70  bitcountsingle/regular.ttf
c214f3227a93a64c5b73d7e6a1a922c90803fcfb7312404fa2890c63f56fadf8  bitcountsingleink/OFL.txt
3dc8184914b365b1b5d19533b416afa591cbe25fcd5cc7c5ecb33fe51d1ac4bb  bitcountsingleink/regular.ttf
c324192c8b3a988bae45a9a7e4ac1258b684739003bda114e0523423440457c9  blackhansans/OFL.txt
31960809284026681774a8e52dc19ebcad26cf69b0ad9d560f288296fbb52739  blackhansans/regular.ttf
f67ca4a200424868ee8fcd5464d7b35ac1cbf7723f6bfdbd19a8524689fab9a8  blackopsone/OFL.txt
282a825b5f294377387e3969f765408157dbea8da0f5d0aae68c6bc704b145b3  blackopsone/regular.ttf
94b5d5a52420a96f2b4f427bc6f56133f6ddbdfaffa17fdd29049811fc9fd64c  blaka/OFL.txt
5cd0ff67dcfbc371c6450afffe10f6e7027ffada0c31f436beb8865e57b781a3  blaka/regular.ttf
94b5d5a52420a96f2b4f427bc6f56133f6ddbdfaffa17fdd29049811fc9fd64c  blakahollow/OFL.txt
59cb30824e6023d454b4b44038cf44cdc9a4ad67f9795171c646c98ceb2bd542  blakahollow/regular.ttf
94b5d5a52420a96f2b4f427bc6f56133f6ddbdfaffa17fdd29049811fc9fd64c  blakaink/OFL.txt
d745f0be7cf43f4e8998834ef730b3cab22a82db19d6a1737008b7b4a87112ea  blakaink/regular.ttf
da7c3e42b502b5445263d492b5adcdff01e656d87beddf8cc5bae5657898664a  blinker/bold.ttf
3ae0ef4107cdb72d21f4076575487e7b1c76fdc2d62d451ef223633a3196cb20  blinker/OFL.txt
2f2da3988c84378f11568885c970c442a7263bce637bd5bd4b02ec064c5753c0  blinker/regular.ttf
dfff1619f8f6871c6372f8855b67211f9a73b4e93d45aca868cd8f46a48622de  bodonimoda/italic.ttf
931dfe2e0cd3c9443295f5c1d754b8a8403bf060df50c1d5900267ade83d0046  bodonimoda/OFL.txt
550f5e34ee0a828d7941b1fe9bc58b34e5260d3f33a61532e6d0a0114e79a5cf  bodonimoda/regular.ttf
303868aeaf81bf6c71ca63ac32669da9c9de7f73343e34a18893d3b5e58e672e  bodonimodasc/italic.ttf
86279342767d5f3e6b07b49dd591f196dcb0ec9ec8b9ea339c09221e61863d46  bodonimodasc/OFL.txt
fff815c5b6fb7da048acd9ca59a1b6a5751cf454cb701cd8185a2a0bf06d63ef  bodonimodasc/regular.ttf
3793a376255d457c0571e009846e92b4fca702756e6f28d43b54e71bff40e380  bokor/OFL.txt
640d475abdd109bfd80d2eef892fe1c63d3ec0faddcd15f819c5f1729712c370  bokor/regular.ttf
45cc82ab4032273c0924025ffcf8f0665a68e1a5955e3f7247e5daf1deeb1326  boldonse/OFL.txt
f566c572a85fee25b41ccab1a8d18ef8039a30e3ca44f310ee162899ea6d5fc7  boldonse/regular.ttf
c59ccb3ba8f0151236b1b427b58bee0c90607c82ef747cc6e19d5e20138385dd  bonanova/bold.ttf
0d61c160a521b072d1af19e9683754f3f5761bbce35f73fdf091ecdf495bc6c2  bonanova/italic.ttf
38f7dca74a98bbcc13858c9f56e9c7d86e12b4242f2a5ccbecf6e9277c9fd363  bonanova/OFL.txt
d72f7715b6b66096e0cc2971e4954f8be33bdced1f143f9c5739a03cdb60bede  bonanova/regular.ttf
bf71dbb726e75b34b3f09aaf799107937af5c0f401f3fc6bca80cbbed55fe36c  bonanovasc/bold.ttf
9b329433c3a9a2e4c89c1197b9cfffc1803c3cc6e0b95d6481d29e585fe3a34c  bonanovasc/italic.ttf
640d65a09191a9c6b84fdc0a8bebdd807bcfb92ff9afd7a668ef2e984b2f251a  bonanovasc/OFL.txt
e4d155cdf1917f42e4d9073ab8856bb4b58984a3849c7753f27fe3837da832f8  bonanovasc/regular.ttf
c130db0ae064ae91ddfa3f73c766d6998895cf4138f37d85398fc14ff62d555e  bonheurroyale/OFL.txt
c37f2847c2d726e254762afe26354ed6d9b9ac88caa4c3473a89eef359fd2878  bonheurroyale/regular.ttf
a44737231b1272dda0ff794086a02be2967de9a83db7eeb0265007c9667cbd12  borel/OFL.txt
14ba894fe6b13f361c5beafab15048b90c4abbf282e3dbb477672462b323b3a8  borel/regular.ttf
005dd8f296dfe349f4da0da2ab29fb730a1be2b16c760197740b133680c85769  braahone/OFL.txt
b571d948a89980dfed4e69170c852311989ce2807ec486572d6106049ffc9521  braahone/regular.ttf
860d9f5094c46bd508bc0477da733461bf5eb8f466080909a3d42ffcb67923ae  brawler/bold.ttf
6bb89ebc3087ca384513615bd4faee0a636fde0934718263257a13b7eabf83ea  brawler/OFL.txt
5f7fcee66ef84c8b27f92b7cdb973039a6194ab3efcce4b328e4755ccb676831  brawler/regular.ttf
4b5a7d8f37f5602621c8a8d7358a6a2e71317e6c231c661e15aef0275d3e07ba  bricolagegrotesque/OFL.txt
413e7357809ddd12fd80a96a8a396de0e401638d4acd3cb3e37532f0472ac682  bricolagegrotesque/regular.ttf
ebd116b7b49a952a803623ceda86b549253f094f35934923dcbf9ba178086d67  briemhand/OFL.txt
baa74c890e29a80a003ee4b50171daae4f448e5952491c9c2682ef6b5dffb02e  briemhand/regular.ttf
0818bff7217e2a147826e6f18f6b4c5094f7415fcc61298883dde2fded9b4411  brunoace/OFL.txt
2ebb34cae30afcb6859757b8c0cc49c49203781216e4446e07a77046c633cc2b  brunoace/regular.ttf
0818bff7217e2a147826e6f18f6b4c5094f7415fcc61298883dde2fded9b4411  brunoacesc/OFL.txt
97fc6885b4c0345793ddf13bedd7864bc0f45ed47ad05628e42cafc5d8e795d5  brunoacesc/regular.ttf
c694f075a9240c47c72a2298acf9c14f79abdf7bae824eca96b78099dbed93c5  brygada1918/italic.ttf
733ac89b598ee093fe094927a8e66a988423a61b745c62233a2b0d6e2a159e58  brygada1918/OFL.txt
93a23e7c6de5e2c54410116abceed294a05b71aa03af52fbaa92c2cc79003d4d  brygada1918/regular.ttf
6d23bd7e9bf8c35c58504f42c0fe2d55cb1295d6cc49fdb942c3a5bab6ebaca6  buenard/OFL.txt
275f9307353c7502ce7553cbd09ab7c80c73dd2da854728df18d796f9455beb9  buenard/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungee/OFL.txt
c4f5361ce120af3e6b9156d0bf379fa19cda2ea0cd18ac01fd99596c6bf66e3f  bungee/regular.ttf
2ce1c4fcf4ab9c8474d0824434497d4afa4425db4de5629103698b170ac4ee74  bungeecolor/OFL.txt
cf21a786e54f43694f4edbb51a38f81331a4c3414217c524c8cb2d091aa7fd63  bungeecolor/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungeehairline/OFL.txt
fa720052780a73c9e8ba196bbb5332d361d366624f13f486beff125097fdbfb2  bungeehairline/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungeeinline/OFL.txt
5a07361627376971fa195e8500ec0fc5e0daf7df2f94ba8eb30d1b10ed7e0375  bungeeinline/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungeeoutline/OFL.txt
9232000ff85fdbb68987007305f2de877486d63d31450f81b403461bbe721f1f  bungeeoutline/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungeeshade/OFL.txt
665c626082682b462f4e696308eafa7071c114da8f8ff3fb73a289c7ff7df482  bungeeshade/regular.ttf
d5787a50dde5be6c6daecab9ed459939b1bc37cff0d0e00257eaf1ec2cf4c16c  bungeespice/OFL.txt
ccf8e3f7eb1ac87ed217097332856f9007484362a00ae3b42a03c6ef851158d0  bungeespice/regular.ttf
ff43f39d2143afa2ef0a7009629d25f62de23f0614ecdaea6dd07f6c58c5d2b1  bungeetint/OFL.txt
ebe2699c1507981225cfa75c601a2f66aea813e919b34ada735c676fb4b32726  bungeetint/regular.ttf
5f1150f1ed33740aa5549f68f4bbbfd5d61b9bab8a5502d03349a08714765e46  bytesized/OFL.txt
867b090a29cf5b45378692d3163439bb51875a3ddf4e37dcabf62030d04f1d51  bytesized/regular.ttf
c3e675a67e7673a811d7162cdccc056ceca0eae21963b3e18e11dc1c3717710c  caacupeone/OFL.txt
2f95e76b7df7f29c722c9bafb248cffd3970d92a19dd6b3f545e6934b64998cd  caacupeone/regular.ttf
f033cc4391bdcbb674169c997e3cafbf3417b1fd790a1d9bd31eafa0ca8afea4  cabin/italic.ttf
965bf33673aec648a3b399185639e502b58e52693d004fc03f6bbdf21b1a0094  cabin/OFL.txt
a16576e6cec01cf994c46838ed1c17ffdb62cf6da8430edfbcb011f57dd62457  cabin/regular.ttf
55c7759cde62445fe60d36df812f83ad2f720929628040f2a036e1e8c6e48671  cabincondensed/bold.ttf
a20db45220b6c4dc9776f24c77dc9ec7a98977d8b3c65b03aabe66b2d08e0791  cabincondensed/OFL.txt
d3ad2ca1872bc3a8664ba913314b2f85fef015d0a7cb3007a7ca6420b84e574d  cabincondensed/regular.ttf
0961688037b97947495c2e35e6e5a93f2b234490514e33346605ffedf9c7e6be  cabinsketch/bold.ttf
f6fc9fbae062e4efc1b0306e27715d43cd64a48b8ffba81c22034b8efee4fce2  cabinsketch/OFL.txt
a6f989fcc910ca321e06cd6a20dbcab20f9e41bce084911432857cfe286355e7  cabinsketch/regular.ttf
c0a8947de199b422d30c16137e4decd5362e3a1d504422880d69c02bd6046dac  cagliostro/OFL.txt
0d205e9a9b34691dca50064ea681404157f1747e39b592fce978b2a32bd5fb61  cagliostro/regular.ttf
a4554e1799d42e1405924b61eb0e0722ae1623b1f1f07f995348f96c496362a9  cairo/OFL.txt
667c987182391c91f4e57a2f455b1794fb5e3ee6ca4ef3383e86bb690fa9c964  cairo/regular.ttf
a4554e1799d42e1405924b61eb0e0722ae1623b1f1f07f995348f96c496362a9  cairoplay/OFL.txt
2c275b43ace54233a0960c3aa1d05b4e9e0e396a501cd3f8d446b16cc3362745  cairoplay/regular.ttf
ccabaa7b7e2fdf253d2b1a5fa699dd8a3df8d835a9eb285ad82631a677eb76c0  caladea/bold-italic.ttf
ae3cb2dcbc925809dd29d2a44e9802211cab66be541bacbfc9c08c74b27c3742  caladea/bold.ttf
4359a8e24f748b6447b1ff6d7a174febe70961d29f8bb8634b56dacd740a3deb  caladea/italic.ttf
ccdab61d371d8c8683a128a92cd7d498dbdb1d37689f7cb21f1bf6b16658d213  caladea/OFL.txt
f1e899278b7b4491aba5b6a8253c4b04c050cc59b21865be5c37559a775153cd  caladea/regular.ttf
8b3204f5a3ae2e3276e66c84fbbb247ff6daa35a3a10b88f20d60852674cbb12  calistoga/OFL.txt
85a5accb2453368357d432fd0edf4701545cac7551946711c06085677fd1399f  calistoga/regular.ttf
c6bd569e2bb98d55fcdaeb53918c023741772ea882d470844195f858a41c5551  calsans/OFL.txt
040f5d1335848146e769ca40ce9664ca8b7639eecdd7316f468b7db20d1c9c01  calsans/regular.ttf
4a5310a8d87f7909fa465794fab60dc37aab5ede8214ff7eea95f36c7a2b8974  cambay/bold-italic.ttf
75b8835327db778da23a029ad0782bde9f82567f902f9cf0cd1e18efa0fa96bc  cambay/bold.ttf
e2946874481bf5e3f28c6ec65a92bc529ad9ca27876fe7bcca8b0f04b5410bb3  cambay/italic.ttf
846e8cc6dc69bf685d2db14cfa758ff3d9d771d54c9e0d3b511f0ecb97ac0e8a  cambay/OFL.txt
473faf71630aa1b411fa9887951d1b7b2674efa137e6697cd71afc2bf17d4d55  cambay/regular.ttf
913df4975de5e304a2395c7e1b9c994dad4bc93f1e80b94ec8662113d87d3e3b  cantarell/bold-italic.ttf
1b15d4acd20df636755bafa1e026e73fb277740aa27442198795fcf0d1cb9818  cantarell/bold.ttf
113797007a0baa9eaba2688de40b51f1d907f5c4f2add61cfd25a5e626153613  cantarell/italic.ttf
3d916878ddf8e33ecddd57b8cadfb4c3cf84760cf9c1d66ed3e0654c20403d6e  cantarell/OFL.txt
840a255779258a2b24b5e3d1f32a821ed641fdd5ef1e47c4dc180064db9ccfa1  cantarell/regular.ttf
755d165efdbad1ad4a7840aa1f2484b0111627993e162bdcfb25fb2c277db955  caprasimo/OFL.txt
786ab84ee787d40df55be78cb4361e485a1c6687195cbcccf3538cb5e46ced90  caprasimo/regular.ttf
01b7787451e430c45bfc2878b0726d37fb9d211fc21474f56f23e45efb8b7901  capriola/OFL.txt
03bd906c00b8618af3b0844a45165b699e2fcccd589d29812b5c9f83afd49e75  capriola/regular.ttf
3acada615ba300875cf2b4fada3873b8fc93ee099682059782ab25a08e29a6b3  caramel/OFL.txt
36a460f8418d5f9710da43404776fc914fe11ff5ec649e9c8bcb670c602b92be  caramel/regular.ttf
c83b38a64847eb1a4583a044f001c82c52df49e77f0a40edf4d0d2aa9c3ef9f9  carattere/OFL.txt
2ee075b50a75aeaea0d976d916b535fbcd423a684e97fe8536fd8f9efe905ae6  carattere/regular.ttf
6c9383b1471936ee83b08b67bf79f0ed92bee3d5e8363ec3ba21309d5a272e36  cardo/bold.ttf
52c51cfde3a827dd9428511c4a968699952b8a917c5f0e97be782cbfa1880f9c  cardo/italic.ttf
8e28b778b6e1a7ff9ca72f4dee2d53120aa2856dc1bfd0be44307e365b0e45bb  cardo/OFL.txt
bcb81f376f1c3892c7026dabf2beafbd1a7ee8ae95d132ee7d4ff7d7c3988261  cardo/regular.ttf
b32928186c119599e03ca6a1ffc680fdcb7fac95772f4b95d989cf6cd3861517  carlito/bold-italic.ttf
bb5d20f79b82599ec72983597437373a80f2d2085fa91fc144fd74e876a594db  carlito/bold.ttf
0b019225e58d702bfedcbd35c21696769f8ee115cb6343f84c2f240312450d1c  carlito/italic.ttf
58402f82a7c332a700294988fe7554fbb0a63a8d27ccc1ee3bbc640311990a00  carlito/OFL.txt
f6418f708baede9789daef5d458c0f53d2a888af9820e8062934e504fedc6595  carlito/regular.ttf
afc1b710d644c1262e1765d2401abcf93a545a4cb051955e2243fbabb8164e25  carroisgothic/OFL.txt
5fa38885ea9f9ea2d42319d1e88ce9170d67b858da7a67a2740460d15d7fcff8  carroisgothic/regular.ttf
afc1b710d644c1262e1765d2401abcf93a545a4cb051955e2243fbabb8164e25  carroisgothicsc/OFL.txt
3dfc5fe797ab3e04327287d9dbae313847623670417e850d39e24662071f1c98  carroisgothicsc/regular.ttf
c1c0e8a708373f46285058a03594c67ccbf3af9c23c329957270153cdbb4b70a  castoro/italic.ttf
5b3228558cbf744e6e4050b688ee83cb2f7646cd5ec7f88553add9cb0486ab36  castoro/OFL.txt
0039f7e09796212bf682e48872d94d82f5a672a79f61c46b4f2d78717af494a7  castoro/regular.ttf
5b3228558cbf744e6e4050b688ee83cb2f7646cd5ec7f88553add9cb0486ab36  castorotitling/OFL.txt
7426c0a1db078a15efa65d7d32cb688606918f165e81d6cdbe9477d44db55719  castorotitling/regular.ttf
c88333734ad7cd30540ec6614d12aa829a0395715de30e336d22ddfa3005db42  catamaran/OFL.txt
f6ee331c381f441454225196d7930d4d0a31554d7f1f9c8c58149ca9e122b294  catamaran/regular.ttf
011ee2115104c54c2211d2bd39e1dc16ec29dcbb6e3eb797f4c2a615579e0c7d  cause/OFL.txt
3f6b01fa9cfe6d84948ae903f954effa5cdf37a3ec0e3a67e15276d9ccbf95f2  cause/regular.ttf
1f9d81d094273d82f3898a1ee8b598a717d050ecbf5ff7bede105b704880157b  caveat/OFL.txt
0bdb6b660482d31531b3945849fba5916b3ef8695da7024a9e6b9ee3c4157988  caveat/regular.ttf
21b54eb0d7513524798a00dfbaf99a02c003a0012a728cc5f0e02d24c50482fb  caveatbrush/OFL.txt
e565bd7bffd895ca64f8d1cb77c816b9b38d9c010246386a07c9648592f6f282  caveatbrush/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  cedarvillecursive/OFL.txt
5f86d71d08a68605d5912b9bcb639a060ce9c0debd7e0b715f5e268d4a4bc317  cedarvillecursive/regular.ttf
bf012ce1894ffcf7d32d3e6548b90df7c40f30161b5cc295eb54ff61c21fab19  chakrapetch/bold-italic.ttf
65fbf76d95651697275e19db4d717c0e95a789ddd3476478b05292104db278a0  chakrapetch/bold.ttf
3aeea48f0ffab0d6ad8d3cd0cb9c0ceb98ecbcf363521ce56fceea51ecbb1d1f  chakrapetch/italic.ttf
13831d02389d917d22fcfa6c79f98f8acbf61d230add0e73a4d4dc5f3bfb9e56  chakrapetch/OFL.txt
98fcd638baa5c81ff0316b7538ce330ee3b23b1302726de3526d5933a8ecf986  chakrapetch/regular.ttf
6b12c8d417bb766fa017d1161c7ca050392817a7eecbf3110fc2a8616564b956  changa/OFL.txt
7c4f7a14d4b70ac8816ea8df3a0b127aee4c5f5af7239aca2afecc84ddc7f4d3  changa/regular.ttf
e98ce988fba1c138f4e7c0c5120809706ab1b24a3c29638ca83ab2ff082e08db  chango/OFL.txt
3e566f4b881f24198fe1b6525aae970f9200078136e3416abc7ba0272d2f80d9  chango/regular.ttf
6e1fa92fda7ab74fcce8ed5d7a9de10a0fb43d777590e8ef9f6931da6e932481  charm/bold.ttf
41423e9e1d0ea79d0e78bd5fe9e0b27f4c23140706f5dfbfe116839c83aae91c  charm/OFL.txt
daae102e411243377016dbeb8cb9d53087d13074064fe79658afa966a9ac330e  charm/regular.ttf
8bf4f82298997010662de35cec504c0504456e51d3d9a9a6b4f3788e4b04abee  charmonman/bold.ttf
23b896f4937eac954a383340c92dfcac1c6e05ec21cc08ec6de47d30ad8496a3  charmonman/OFL.txt
7ec5575c6c87a6be69de7839b3ecd1027b7ba6510ad3e49bc30b73cc9ee1bce0  charmonman/regular.ttf
0a493c95a74cc13f6766dbf2de4c47dda0c446c5fc0d6576b970d7890ce9f9aa  chathura/bold.ttf
1e78135a80dfb42c70e8d66d81bceb0e0d9a81fa4f2aac8a81f9337d5626a96d  chathura/OFL.txt
aff3aab23f202092d411dae54a612968dee39cf411c0d8049e6a9ea99f7e2c14  chathura/regular.ttf
4a010ccb1f317377ed9f4b47604102a5db3e50533d37d805d3322e56797218e0  chauphilomeneone/italic.ttf
8c495ddd455def58a45310376a747bb61bf86e4b071cc527b3618bccd3ef00fa  chauphilomeneone/OFL.txt
2b9fffaa99f228498ee104bab524d7932eb1c49dd635e6be2a060c8ec999c9cc  chauphilomeneone/regular.ttf
5d3457831b42632d958fe1a14a09706d8acb006486a5ca5b2b419cd61cb22e32  chelaone/OFL.txt
a5633f28945f31a5e494683af2c1f99f9f91c96578bf47dc9c315ebe3050c8f5  chelaone/regular.ttf
09fc82b47c15731fa66cc812d5110e00879c75209ab76d68bb813eff5ccc182d  cherish/OFL.txt
5d6588a51682057329566baf12a11c405dea771a9dcec61ac5fe9a83d9db6b13  cherish/regular.ttf
0e04cbdaa14fc3e98b6ad1c9156b04d952cbdd0d31845766bae4cb543a71bcba  cherrybombone/OFL.txt
9596c6793eb0335057d655b13751ce7ccb50ef0cd15cb52c58465fb62de2bb8f  cherrybombone/regular.ttf
5cca323c29a80e19400a06be7c0c46e19db8ff2966cbbff7e05eac33354124ba  cherryswash/bold.ttf
d416bc9437e1d7d8aba0613395ee49c95ce72d680672e910c6205b545cfcbad8  cherryswash/OFL.txt
ce98243d428163be0d59fc02d3133507cd5afe78c501aa320c09c5deaa78a4a3  cherryswash/regular.ttf
f7516c3dde20383922ee27750d432cc2b95b4ba275204d374b7305ef95ed2d14  chilanka/OFL.txt
c6ce47d1a8d387310469c8e355351ff2bd4106030c2a45f1cef0c93215075ed7  chilanka/regular.ttf
502339e1cda77e24b5cd46a1a875e4c5e6f20ea019c248f57f23423527030ff3  chivo/italic.ttf
c9b69fa18c372df2b187b49efc57b1ea643b86a938e5af32f6b5a7af1017c891  chivo/OFL.txt
801674cbeff749011a0186b2c932dc9158187a8ca4ca6598db2a1f5c7c4342d1  chivo/regular.ttf
e6c3e5469d99fee864414845d95ef6aa2fb166121bddd7486d6958c4a54e3aea  chivomono/italic.ttf
c9b69fa18c372df2b187b49efc57b1ea643b86a938e5af32f6b5a7af1017c891  chivomono/OFL.txt
725256f30b7b1b25dd001a96ff8d4a23773197bb886cd847a97ff8eabc9c1d9d  chivomono/regular.ttf
55270f3e221dc526d84c2833e512cc0f399bcd2b4b1746f63d532345b23fae56  chokokutai/OFL.txt
c622b971d1bdb2d8cd64f978746e6d52d361417ae4222c275cb57549e34e097e  chokokutai/regular.ttf
74584d937293a9cacdcd2eb05851b71aa1527901c18b87961d2f877c77a1b486  chonburi/OFL.txt
aa0dac4df08af10785ba1dc10121492227f8e4288f0a23d11dd1d1f5a7f6ebfa  chonburi/regular.ttf
f2b3029aba64c378bf0963b62945eee15e564fe4330b934c8f2eb058282b5e83  cinzel/OFL.txt
f4d83d34d1f6c741193e4acf4b3dff9531e5a67b6aa65228d00a7db72a4e0f34  cinzel/regular.ttf
e854e68a388aa50d742a4415c1ae5c17a617ef7956c95a70021d0a4a44f20518  cinzeldecorative/bold.ttf
1e5d6660366ddcfca4f2fc10e2acfba9fa4d97d40aec80d7dbfd41d730a420ae  cinzeldecorative/OFL.txt
5b862be329103ad287a10f0a53e27a40e8cc519999253f1a0223e2dc330b10b8  cinzeldecorative/regular.ttf
971485d3de1728c53f15c58773e9aec47ff7aa2e7e779ce785a32463a4d608e7  claritycity/italic.ttf
72aea7c1c613e893f6936367a89f1b241ab61490171a021f675b1874e5311a28  claritycity/OFL.txt
eb7aafb087140dd2fe38612cd82d2b61a18948ad3fd3688b7c4989441e6b942e  claritycity/regular.ttf
ec1d7de447a90e4b6d8f2b4f95c7f89a70e315fdb41969bc716059e4f2461fa4  clickerscript/OFL.txt
0221d4376fc0a25795a32d7e309798b6693b56f65c5851f92529043b230a9117  clickerscript/regular.ttf
5c289da4a19f054ace8e31a144a6a254601898cd7faf9eaa301141afda0adbbe  coiny/OFL.txt
ef02d723a54abe4819bea54ea8b2ecf72d77d258010bb336cd4862a37705eac7  coiny/regular.ttf
574430e571a6928624f4bdf044420f7547a26309b7ebf6962296d33294e0a1e0  combo/OFL.txt
e714674117c2864bf7407e2ebfafb11e581e97480286fa01b419adda94d08686  combo/regular.ttf
bc85bae0b512b799bbfb2b916e4d0a34cfd963d09778cd783e248b479e67760a  comfortaa/OFL.txt
0fc3f45dc48b614db9c39181502544b37217ecbf8bee2fb35886992bc96c5bd3  comfortaa/regular.ttf
abc9cc1c5d7dc6005ebffb703055380ad7b39a159f690e16233d80f78262f82b  comforter/OFL.txt
2852da85b2fbfd37ccd87387f3578a251cb9a8814fbab22c4487f792936a2267  comforter/regular.ttf
8a4fe79803bade3a40c58d2ab69586f20b841f143e4ea60fd2bf7d98b29a8489  comforterbrush/OFL.txt
7bd357dc8bf83d71f27fd5155ece5c8c100a2042d4530e4487635473c5836f95  comforterbrush/regular.ttf
5c312c2a2fa64eee82f3b87fcfab8f3b12a5e59b043124401d322eb323cfbf16  comicneue/bold-italic.ttf
3e7e5fccfd7e0788f317b43312151c1bd5cf058c9697a8d83eac3939050bd61e  comicneue/bold.ttf
e06bfd1552f5c9464c5665733ffd69239b0593885dbb9e059688a5900f78cf98  comicneue/italic.ttf
7c38a22e5878e60fe423360553e63dd7be23d29f1f60336034935dbfc96e8320  comicneue/OFL.txt
a0ee5a37c8b27c4db0700137d928598b1e23b0089e1546a8961909176b779360  comicneue/regular.ttf
33aee007212b696afd57d50c901135cd723cd188f7ad98f3a1c572ea64e8f0d5  comicrelief/bold.ttf
009b3056cef5c9bcaff872bfb0e27fa4a0f8cc6f6984cc490caf5618748d766b  comicrelief/OFL.txt
9ef4958ab06385d91f635f83a15569786b243f9d010cfb3f9a5cdda593c7bc22  comicrelief/regular.ttf
2685ed3cc823fdf9c1f91e59ede79bc8823a1b5e5d654e10072bc6d310277065  comme/OFL.txt
c368b2b9152d7c1e7d52f9dd058c2b01bab4dfb30c4b55097787083ef61f82e9  comme/regular.ttf
4a7d88c77b4bc39ff84f2e058ba8f015636c50ce33588a86d9da97defe519933  commissioner/OFL.txt
db01279a6eb8676ee62675a4d7e5edbfe5f08fbc109358e2f49760b70c0447d3  commissioner/regular.ttf
448cab2c843116d91aaed166b50d8e05821ada22b94a7220b8422873390b9650  coralpixels/OFL.txt
c42dc4b002d50e1948beb761103631bf90a61878fa3e560699734091ad561540  coralpixels/regular.ttf
86c58bf8f6a7160f9914160fb3c8dfbf75d5b145dd0ab943a0b82913836516f9  corinthia/bold.ttf
93c4a947d0c82b6838675aeb6090b7e9e7534b9655b2aeec1874149290a58bbf  corinthia/OFL.txt
ee2adb172a41a52c5f6b7de6de5953bf8e9e6bdfa5bc641fdddbdf4c737fc98e  corinthia/regular.ttf
2c4e1c43fa126b51a84160815b9264af442c6c531d13bfd3c1723703cd489dd2  cormorant/italic.ttf
60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956  cormorant/OFL.txt
8f12cb21f05b61649192eaff13eeeb1b5619bc524feeae672fb916974259a076  cormorant/regular.ttf
0f48ea6abb2084537854f7174c470991a463b13036309e3b50a81511611c530d  cormorantgaramond/italic.ttf
60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956  cormorantgaramond/OFL.txt
b20b7d9626dd956b2c5e558692ad328b1f19e3275e2782db4fa07670d83f35e0  cormorantgaramond/regular.ttf
d5f81edef82cf31c093d057709e1bfb42aa776aacf78651b14f9817c2decb251  cormorantinfant/italic.ttf
60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956  cormorantinfant/OFL.txt
48c6efe07539c75d3108795467898706a9cd71ce876d461e45f58482156d7bf3  cormorantinfant/regular.ttf
78f70c79b5c0a1e66641d4b4a2e2ed32e1a45774b3de94e56f8de68510219177  cormorantsc/bold.ttf
60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956  cormorantsc/OFL.txt
a51985a075f3884d8dc9b2d20367c51b6b05e53fdb912959acb785084579aeaa  cormorantsc/regular.ttf
b934e5e865cd0301e0be8ef15f85006d5479fbb2faf875093ddc36493b8ea845  cormorantunicase/bold.ttf
60700d351cac4650c51f3f9db318d2a420f8b45052dba2715eb5fec41f0f6956  cormorantunicase/OFL.txt
8fadf0a9ddf4b7d20fbc7c330a740378469fe4f4422c225dd23e6fc5dc028921  cormorantunicase/regular.ttf
4b691441a35a78ec69490c046596f3b326235e3a3f88a56d3b288b4f2844aa6f  cormorantupright/bold.ttf
9134ca6996bd33ea2022e109f13f20e29dee1dcd8b2e8878aad576d2ca334e9f  cormorantupright/OFL.txt
69d6fea133a07cfdeae0e928141822317dc5a4521e568af32dc4edc7456bc1d5  cormorantupright/regular.ttf
0b1bdc34c0cd001e2f84d507c87f990c21c1ce5034b448bf201d6f074313b190  cossettetexte/bold.ttf
ab398cb1f55e73f298510c76bae3d2a6a87c71b8c711bf4ba146145f14fe503b  cossettetexte/OFL.txt
7375a5cbf8fa78165a14e8ef5fa8074eab5c5553d1ef2fddd6fa77e8ef6e81a6  cossettetexte/regular.ttf
05635008898dd896df9da3daf04312e22ba59db5774bc091dc2680a20ca571bb  cossettetitre/bold.ttf
ab398cb1f55e73f298510c76bae3d2a6a87c71b8c711bf4ba146145f14fe503b  cossettetitre/OFL.txt
552ee5848f2afd5abdf52f6ec7896a4aa443aaadd68fa5d5048e5788f0850f00  cossettetitre/regular.ttf
0836fd874230b17f840efcf7d3bb529f5a7b5befbfeef94478519cfe2d8551c2  courgette/OFL.txt
099739d22e66ee2b80656bba63847f9ed419ad7e3969ba2c1d3c437c0d08f3e3  courgette/regular.ttf
3355273f3ea6d6362658f9564f4e83d59e156cf1a182e3c1592b5c5943627dcc  courierprime/bold-italic.ttf
ff1f38786c849d1c41fa8e447960abdb2bd75fdfb0cfcdeb524fad65a5af3638  courierprime/bold.ttf
f1b9a5829789f7e56432a9f3bc7665ef4531dbba1c112639e48bef39621a006b  courierprime/italic.ttf
9a755af092b494944c99f471be6fddd19b006a448fefdc4717e4ee0aa09a97b0  courierprime/OFL.txt
72f793376f8e2841656bf21d77a5de010f2929bd6956a22ee848ad0c7eb978af  courierprime/regular.ttf
848e858726fee0ae27b754e4cd6a2755209bf1428a8c91f747696d58c33906c3  cousine/bold-italic.ttf
17c8a7245156d2253531c9e529474937b09d9f641c5ae7695c5e33f22822eef4  cousine/bold.ttf
ea2a76ae3d0ece9cd59f0d30fdc08dd70e8f5f457beee5b0852a7b50c2286c7c  cousine/italic.ttf
b81c4d4dc0a9f72c9155e78187316e016e2012a8102468804173dc61468b906d  cousine/OFL.txt
1da22250675fc4c42fcf3a9736c44bc0570516105331443b663fd5cfbd1412fe  cousine/regular.ttf
9db9983bb803b5a12d635f24f9a07aab91beaa53499c1036d6aeb79599b03f7b  coustard/OFL.txt
71f251444fc70fc98adb011cdf8d8c64ecc7ae5d57fc04f59d8ebb1cfc16460c  coustard/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  coveredbyyourgrace/OFL.txt
8a7e5687a4f9aad95243eb28cdc624009a335e0de5175113bc5f1348a4d67fd7  coveredbyyourgrace/regular.ttf
a74dc11dcf2fbb1452064e42395a40a907ca630b49cff86012223785e52b2559  crimsonpro/italic.ttf
1820869bd5baa1c2d88fa87c89eea532cf9442d841008acab720654b7f82823d  crimsonpro/OFL.txt
16aa9fb7300a93637da51fac03a071b2ff08b6bbf65f99c794c25f040b58af6a  crimsonpro/regular.ttf
467013e913e46304760461c46661c994b2aa1769e3fbd31371026300315181b4  crimsontext/bold-italic.ttf
a3a0765fc5e8d0b49b540a23aefe0184887dd79f06a0bdf4db7035cea6befa93  crimsontext/bold.ttf
4ed1699ac7c64e8b3d33f6bb8323c3d7206b0d7bacb9ee2d65c697e6014d29de  crimsontext/italic.ttf
50fd67cddc097377a5c871e8452b778bc5aedfa3480a705cb27c5e3a078218df  crimsontext/OFL.txt
48e6c5d5ad1d01599d374ecb817e15890d1feb3b8a3a88e527d44c90389e1f06  crimsontext/regular.ttf
eba176d3ae86af6b41e9b744e4d18fb56e2a6ad671381bddb61fabb86b1d39c1  croissantone/OFL.txt
55ccb462d07bab853281e9fd9646f0cc258bfb1ae8ff645f857ba1f921f7f69e  croissantone/regular.ttf
1b2fa2441b421e16176ed3b0356949f406ef44497df17b2ee7977aa7f838312a  cuprum/italic.ttf
af74fe3bf28777e8b7df9f7ed718b15f92e14d60448f36d7dd21ada6caeca33a  cuprum/OFL.txt
be75585aa57a5f1c1d10de61305bb4266effa1b9083722d20c26adf97e911534  cuprum/regular.ttf
1a2debd5ad8e656b26bb3b29213caa8f7e557a2f31454b11ebb6c3e3b59aa5d4  cutefont/OFL.txt
c403227fe6288a8c1423ca48e93fd7efc81e3b81053f7d17adcf659bd95fa4c3  cutefont/regular.ttf
65a69f7322cb0f78169312f3656ac11b23f052fe2500d091ee04ca31535cc47a  cutive/OFL.txt
8f0eb3280328c0051bbe725ce9d68c9117484b769cf68dbacec4343ae92ee031  cutive/regular.ttf
ca83490f9c203cdaa5437202c44cb636e0c3c11b44b6dc5318bbe5678156e3f4  cutivemono/OFL.txt
96a36a00079058684982f61ee334323f8b501d7b68dcecd6049a4f9177e3a62c  cutivemono/regular.ttf
cf28b0c2cd8dea6aaec899baf5d050ef1f578daeaf51e931a934d100b4de9ecc  damion/OFL.txt
a51fd6c3c517feb9924b98139c2e902a7317caee52c22a2ec9682973969562bf  damion/regular.ttf
6f090277c00af96651ce6dbcc38ff1591047a3bffef486e80b6a32e8276a8201  dancingscript/OFL.txt
21808625578fe8d8cd10cb684be546dca077b27cd03a53a2f1ec11dc743c924c  dancingscript/regular.ttf
68e4cf6cb0eabde76d1fb41588062b2ee3882cd5fd1c868bcc8773788d848050  danfo/OFL.txt
7e88c371ac63b0e4d0140812e703a3e021d37147a0df4f167ac324255a39d42f  danfo/regular.ttf
4a89bc6c8bb9f144683714d67dd3098400f90e194176c31f429fe23a08713ec7  dangrek/OFL.txt
d7dbac288167ef960ea67a5d45890b47419e18c046e90c68ee655a0168e0d06d  dangrek/regular.ttf
60eab011e210601f85e18474c5a191838c95a9acce0cc6da1c646ac9e3683cd9  darkergrotesque/OFL.txt
ed61c00a14f571096a8c03d00f91d37907df9d55da7cd7444914353ca224cb86  darkergrotesque/regular.ttf
bd898c86fb555f060ee9e5d318d631bbdcd196b98ae8019e0077421f46da132f  darumadropone/OFL.txt
beef6d9031918823176ea0f9f729cb811a5f250598d7c8c684b3dee333810689  darumadropone/regular.ttf
7610819c7888c8e7ecdfc573089113ec5355cf95078614ae0e30b509b05468f8  davidlibre/bold.ttf
01f227b494c348ca8daeeaecbb1e08988b222673ca4bdad1681e49ba4cc8a592  davidlibre/OFL.txt
923f06e0f6dc84e1649d8cc5d5e12a8d663adf6aba83ba15baa5d559fb47b86e  davidlibre/regular.ttf
f139d6f43d2a63a8fb3ded48b8ec747d9d59a7fbb13d077d9b96ac88580bc1ad  dekko/OFL.txt
e6b151a5bdc521833ceb9a4f8010195515259e9416abfe055cfd16adb2e1af42  dekko/regular.ttf
3fa395232efa6d42e5af84de2503875c895b24a9299bb84aa54633c74bf8a0d2  delicioushandrawn/OFL.txt
5b78da9362d2018cab40ba93565f7a0134723f6a5ee4e3432726d45473a51277  delicioushandrawn/regular.ttf
9224862f76f6ffc1a12abf2ae4310e584cfdd2a475c503f74d1e0c0e8bee5ed0  denkone/OFL.txt
088761eca739820556435bd4eafb8637808a55e121bed582d493969525c97211  denkone/regular.ttf
9e53298e3629e00ae4c31531cca09051ddaa654a5de4f7b55e596132fff86e1f  dhurjati/OFL.txt
7f82ab141b77d263f9ea9b31b47faf50c11310f42fce6d9dffeaaa334909bbf9  dhurjati/regular.ttf
e2092d37b02d81c24471b8714b3eefb1098e96f80fa658f11284bc0c18b11e8f  dhyana/bold.ttf
00a6fe8dfdc48d6206bcc4f10a765515a73433dfba7255eff966963beb26facb  dhyana/OFL.txt
a7b241c509c6f39eebefe649d2e014d2519cd715a12026bb90afb0c3b97c6266  dhyana/regular.ttf
cdf5fc4014abe91588666a9592ec86200e5a4d743b4b6e05d28d47e850bbe5fa  digitalnumbers/OFL.txt
de9e0cfb83bc10ac6fad876f35d8f381a3ff07f5ca9925919e9d32f980bc9d49  digitalnumbers/regular.ttf
9279f4143833810493f74b4520c8b8fce2526d9df2da9564ffe897e065e1d461  diphylleia/OFL.txt
a0f505e19758bbe69da3e1cdd89fac74e69e851aa82195a61c861bcee7a53293  diphylleia/regular.ttf
f4e8602be4b69bc44e3ce17d026622722b992a07b1aab0db23da48b0155b289e  diplomata/OFL.txt
0197d3dd0c7e8daf4ec373f15a4cdeeb963f76748ffd8360b9150bac90b73997  diplomata/regular.ttf
f4e8602be4b69bc44e3ce17d026622722b992a07b1aab0db23da48b0155b289e  diplomatasc/OFL.txt
6c91b299f45463424e26daf5fbbd5f298ad7b2e89f25bee506dd34a6d5297054  diplomatasc/regular.ttf
32b5bad9cbce64eac6d05c8abbeb619317f7e4cb354e1c33db761adbfaae1b16  dmmono/italic.ttf
2bada5ea45c3c63b7f1ea1f88ce9672c9e4f0c42b2c3b7378949084fe55a3066  dmmono/OFL.txt
55b4c98f123daebb3ed27947ba47b2af00554fc6284d639a540bcef5e6258ad2  dmmono/regular.ttf
22259c0cc8237221b80f44c76ba8d36e6bce3cda72779f5b2773643d499720ae  dmsans/italic.ttf
9af36190332437f5ecd09974de43c1f7c77a310a996cdd8ceb25628b458840e1  dmsans/OFL.txt
8cd08d97e89c24d0aa92edd2f0f4c8ee6195eee9b7c9f154865a58b02f0c1c0d  dmsans/regular.ttf
df74c0ac387baeaeb0fe4f2324e1668e6a3ed8c09cd9796fe162c71753e19e45  dmserifdisplay/italic.ttf
a3e5cdd67d4571dd0a24fcc968de0efde7ae97ef752daf0906e4767619dd7231  dmserifdisplay/OFL.txt
8cc3643535edf039aa5d95440a8542735e9197e4f4b8d9303e980fefbf5ab616  dmserifdisplay/regular.ttf
d016b81df5cd7462188a0ba11dc343ce2897dffa39fb1fcff0fef0bb7684364e  dmseriftext/italic.ttf
a3e5cdd67d4571dd0a24fcc968de0efde7ae97ef752daf0906e4767619dd7231  dmseriftext/OFL.txt
94b5fa7bac0f406cb3149512037f37ea21b55cecd732c3fd3a076260441399cd  dmseriftext/regular.ttf
de5ff32211a4340b01477af39ee339d639438955e409f79b666d4b9207f3c92c  dohyeon/OFL.txt
35644be7f28e0a68a447b1f7af351dcde5674b870f24f7b5f43e26d00b4ab653  dohyeon/regular.ttf
dcc832bd71ea62cbf97f06327a1b5442905b49ea446801421d71f7d1362db215  dokdo/OFL.txt
5b3a3d8d28af31fa9adec3fc5da81a88b52e1ff39ed3930c1db787aa4e79c36d  dokdo/regular.ttf
4931b601cf50f9e6ee749ae76778a067fb2e0df4296f08d095ef38afc526a5e4  domine/OFL.txt
c63552cb60c658e90c1da3e83f9e7cf203562c39cdbf5a78ba9df62d8e7a1ed7  domine/regular.ttf
6dfa3951f0c829518b284608fcc1acb196cba1536b1ae1713a49deccde1ccc53  dosis/OFL.txt
b2238eef0b3464904fed097ef274c704bc63d21407369b7d7a5be7b0821a0e82  dosis/regular.ttf
b6630c61ea078cacd7fabe37d14ffe557a0b45b06683374a9aa9e24262993e33  dotgothic16/OFL.txt
3ad9af88726d42b40f7f365f0dcac785af73cf20ea6f1d5b44e57cc21150b8f1  dotgothic16/regular.ttf
26a7b58bdba6cda8a78ca6e8b3791d8013b8abc6d5e6519f84193893aee02020  doto/OFL.txt
6f4fe7d37853b91df3698daa84cde2dbe1c9695d88c986e6510134910337d426  doto/regular.ttf
3184f6a99f589c78740fbff6ddaaabb43b8cc2f3852da36e60aeb024ea8d6f00  eaglelake/OFL.txt
53a4e929c9ea3584f2432157fd549c7604e6be7e6c4b39873f34fae7f6823928  eaglelake/regular.ttf
bba2c4499c93c9612b90b9825d32b07da52fce2fe57562a1eb6b833553f93c4e  ebgaramond/italic.ttf
0985066662eb755ed3683ae5482a81a9195b49ce3f7e165cc2388b3dbece7dd7  ebgaramond/OFL.txt
ef9512f92f6d579e5dc75af59a5a4b1b8b47d2eda89e00b954d44520e5369027  ebgaramond/regular.ttf
003e3a0675b0b5d38cb6a188039d33a8d747a84effec32e7f8aa6e25cf6d3e2d  eczar/OFL.txt
b52af3a3b457f9b2278612b73c97eaf28270ffc91c99e4c90471cc15bb8748c6  eczar/regular.ttf
11a98fa66908aa244c7608443d945dd50e2821d879bb25b5897ffc8f94712688  eduauvicwantarrows/OFL.txt
adf8176cc45747608c091094612a7e8d3088d4d46dc89acc37df37fb7a561903  eduauvicwantarrows/regular.ttf
11a98fa66908aa244c7608443d945dd50e2821d879bb25b5897ffc8f94712688  eduauvicwantdots/OFL.txt
4be8bf2aa8f4635ceb0d978a2588706e4d12e5c695fa0b8fe1df49b7274317af  eduauvicwantdots/regular.ttf
11a98fa66908aa244c7608443d945dd50e2821d879bb25b5897ffc8f94712688  eduauvicwantguides/OFL.txt
7c47fc85f944c729e9df8af4be787a3c222604916b8700045451a0743cd29d4a  eduauvicwantguides/regular.ttf
11a98fa66908aa244c7608443d945dd50e2821d879bb25b5897ffc8f94712688  eduauvicwanthand/OFL.txt
973361e9e538dda39584b3c259e50b1d511a7a9f2ebe46c85b40066126ee6ebc  eduauvicwanthand/regular.ttf
11a98fa66908aa244c7608443d945dd50e2821d879bb25b5897ffc8f94712688  eduauvicwantpre/OFL.txt
973adafba66b6df689ba134e53715ae1cb97b74a6b8f9c1bc58394052a415f52  eduauvicwantpre/regular.ttf
9c50bb9d2dbfd864553688da113bf817a294f3721b7a35ac6569c63bb939a998  edunswactfoundation/OFL.txt
5a4b22cc39c04d97472bbe705b9700e864492b853b4941645da60202b796146a  edunswactfoundation/regular.ttf
9c50bb9d2dbfd864553688da113bf817a294f3721b7a35ac6569c63bb939a998  eduqldbeginner/OFL.txt
de937b07983c86f690a114d012c5d38cc607cb11cd75aa2cbfa638d5ae109c39  eduqldbeginner/regular.ttf
9c50bb9d2dbfd864553688da113bf817a294f3721b7a35ac6569c63bb939a998  edusabeginner/OFL.txt
1ec0d8b4f3a6fda018079fa284570d2c4a3a514e3687d139b25b05dbb86c7ff4  edusabeginner/regular.ttf
9c50bb9d2dbfd864553688da113bf817a294f3721b7a35ac6569c63bb939a998  edutasbeginner/OFL.txt
17dc8a4e3e38442bd86e4bffbe34819b156cc64b9375057d21b3d0fbc3546ac6  edutasbeginner/regular.ttf
9c50bb9d2dbfd864553688da113bf817a294f3721b7a35ac6569c63bb939a998  eduvicwantbeginner/OFL.txt
b5cbf509d245c56f0a42caa7fed8a8661ad5927d76d88bb2008c9037209154b3  eduvicwantbeginner/regular.ttf
1d62434625ca99e03acd200702ed5fd4d47231d134809807cdd7fb419f6409d1  ekmukta/bold.ttf
2ee5e8e47cd7d08f60bb9555f72b25912c9e81b13f5bc9a0551ddf943da6ca98  ekmukta/OFL.txt
d14f40a588b232cac9fb3063c707df93fc10e8d265694fc99fcfafcc8ab7b3b4  ekmukta/regular.ttf
b69113722df50071b68ea377ad261919f08fd0dd6672f68b8868445586a30770  elmessiri/OFL.txt
5d58d5259d2accccba39cffe12e1226e88b6afc5150e3605eb2a9c2fe06ccab0  elmessiri/regular.ttf
bc485f45f3090748e540223fe29f44bed69b67c7311a3f984dffa5295713a017  elmssans/italic.ttf
864c1942a1eab3864b1c674e3358e360e530c17286ee27ea1a762cd3a2cb5101  elmssans/OFL.txt
5a5c6aca186c65ad8323212c4e336507e68f4ee09d75ae0366607b5eb1a4498f  elmssans/regular.ttf
0c3f4763f49c2cd37757a2856ad470aec6a416981ac6d6e3f900c1128be39de7  elsie/OFL.txt
9b3ff5056866667fb29f60beb4522994afdd4d5f580626c6fd9e6f5bf49f1ea5  elsie/regular.ttf
0c3f4763f49c2cd37757a2856ad470aec6a416981ac6d6e3f900c1128be39de7  elsieswashcaps/OFL.txt
6b9c2d61e6f955e4cc7bc51777a2e411c2034d921d150473098b9c7554734520  elsieswashcaps/regular.ttf
b47f4d635e8c592a37e98f751627cad0a81694c56aecc603b33819a908ea9625  encodesans/OFL.txt
7735320abb63a1022d086c938872dae32754db733ecd4dcd402f2a445cbeb43f  encodesans/regular.ttf
a6896b28cc8e16fe8d1073c766127a07a9c89cc8f4df9ffac376a41ff4050b5f  encodesanscondensed/bold.ttf
cc8c0c3e81cf543e190f128b83ba7c30959f15865c14dd972fca4917faeceec1  encodesanscondensed/OFL.txt
768d969127953c8a2e7d756a7735c7f803e08a3f86be60dcad77bafff3711788  encodesanscondensed/regular.ttf
01487641e16fd85a457c111d9488a1a1009037437a04b1d318cec51c00282ae5  encodesansexpanded/bold.ttf
cc8c0c3e81cf543e190f128b83ba7c30959f15865c14dd972fca4917faeceec1  encodesansexpanded/OFL.txt
525f758bf7d5e5634e459e63d4a8575ca585e2eeed4bec26e2d3e925a266c6ee  encodesansexpanded/regular.ttf
b47f4d635e8c592a37e98f751627cad0a81694c56aecc603b33819a908ea9625  encodesanssc/OFL.txt
fcad22c3440992bf42216e6a0ad6e8640d2d1dfff1ddc5573934933152123bd0  encodesanssc/regular.ttf
0a5b8d0dd5e3d9abb688b2b60e441f3acef5bd3d744f87315346d034df0b5fbf  encodesanssemicondensed/bold.ttf
cc8c0c3e81cf543e190f128b83ba7c30959f15865c14dd972fca4917faeceec1  encodesanssemicondensed/OFL.txt
a1b3ebf1d84017c4136870b6b8323f0ee055a22a9a9e49e58d9e26b67b0ef866  encodesanssemicondensed/regular.ttf
388f18cbf0bcc4dcafc916c5f03989be30de3efebab71ef800f36d1f86b65962  encodesanssemiexpanded/bold.ttf
cc8c0c3e81cf543e190f128b83ba7c30959f15865c14dd972fca4917faeceec1  encodesanssemiexpanded/OFL.txt
aa69bcb0adf89d178c82e381ab6b959eca58c861440532cafbcc24e03cdce0ff  encodesanssemiexpanded/regular.ttf
56fd4c8ff2b01a60bbab0c919817cd58503029efd5d39261aeb8934f831ec4ee  englebert/OFL.txt
97be7df4f050113b713077b9cb4a51e7f62c155ba22c7adf7ee65e0d7b0f7577  englebert/regular.ttf
6160853a95e0826f3d9dd21d26b7518b86e50a3469f19a62c3f4ce1ab1ed5573  ephesis/OFL.txt
8fb4729a918f992a37ab45f1466783c78ea8caa77a7b0e69545322e1dbe9c5f9  ephesis/regular.ttf
7e5263bfe5b8ea9d46201fc3e3d59c354628de2220c3f3fe831fad946a1f7db2  epilogue/italic.ttf
95ebd6a2e4035b8398c83928fb85297b48441f27f405398c29b59aae899fc747  epilogue/OFL.txt
012f651b45f47c10c7714cb7e3f2f7d9ccb7f235a2cc72c6b273ddc735705c67  epilogue/regular.ttf
1bd18e77526ee85d61c6faabc64c9db37455b7709947a38d0fbd25133ae695a8  epundasans/italic.ttf
0d48efd167a02346048688bffdc10b4f9d824e2bffbf0ffeca3a217c48d4411b  epundasans/OFL.txt
5b66232f4da371c82f22c5c4fd50ef99d46c1511e9a23a757e085e3060c2b0c0  epundasans/regular.ttf
5beac9eb7128c086c7bab740503ce83ae260318e4e65a2d52330a1c31dd110df  epundaslab/italic.ttf
f30f6baa9bff013d6d75446aa847bc59cd3a57ec6517568e525b0a662f3d95ff  epundaslab/OFL.txt
a0e338c2514c6f6511466131b1dfb2cc20d03dfd408bbcd759fbca8ad3b1210c  epundaslab/regular.ttf
0417da48fc44780476e074f02f8400028ee704b3e222be5855fa6d960b9200ca  estedad/OFL.txt
6e745beeeb0cae5eea7f38d3132597089548a622d87997b58944e5b1edfec5a1  estedad/regular.ttf
b3a14dd814e7e5158a1869fd89094e213f1ab9abc62e1e1730b751cc93fef3a3  estonia/OFL.txt
03087597ea24879c19d51ca4622f8c4e9cd867d081e7ad0ad3e7dccfdb1933b2  estonia/regular.ttf
062aca9ab9aa4a9e004e8d679e84aca6ef0cdcabb2fac3b27a73808e04bed9b4  exo/italic.ttf
1159ea72ed1f7e7541cea35a0dece48d2abb0317d7c70f75a482f94932382a77  exo/OFL.txt
2f08f818f1135ac5798030c0bca252c0845af5c54dfe172a5c74fbdd68843445  exo/regular.ttf
bad568cea9ed23d6ae4aea41ad3f7747752952aabdd85d7f01474af392a21b32  exo2/italic.ttf
7f95a8eeecc6904ffc81cd10cc8ebc7fcee72a67922924bf45f02dff03b88127  exo2/OFL.txt
205a448676a2586f9c57c25f3d5c58ca8db7e6cf5edf7506783a010c6fe2bfb5  exo2/regular.ttf
5e69f9842ef3bddf9db581642306216f9d25649b9f9de2e80944e694ac189799  expletussans/italic.ttf
6cc3a1a3e60a0db4f824c16d42e7db461a939abb0759a740a4135074001eaba5  expletussans/OFL.txt
33508b3b477c548ac00179d97c6deaca1e98dab4cc1d869dec5815931e7540f8  expletussans/regular.ttf
b8ed61f16fe601a8d20fa9c8ea979f4a7424c324596ce3cacdebb19353e1d808  explora/OFL.txt
a29a1b2f59eaceab955f6667e125dfcd41406a41ebc2cce3d837c45d0405b129  explora/regular.ttf
5a6185c9e0232792afbef890406b569471ceda95e59d1999b602a8047d54be64  facultyglyphic/OFL.txt
27010aebf4430da073b75b8877bc3d3e35bd24d2e4f9403d34418abe94c3d31f  facultyglyphic/regular.ttf
607383c7dece1337b2bb573a09136223addc8a54d5e0a34dcd146280052c4805  fahkwang/bold-italic.ttf
f44512b78dae665290e0bcbc0b5198462694c894d3300019b69a30d87341f042  fahkwang/bold.ttf
7455131628894aba848b3fe9ba8c2fa99f6cbc41f52391934e630a4aa8860fab  fahkwang/italic.ttf
f2c0dfa02d6f5c444b4babd7bc0b43be77ea85706e8524342516bc41e43c2f01  fahkwang/OFL.txt
ce596ef9da1e40d894a1f6dbaca54aab3c699763e2715a649a8146e6ef32fb2b  fahkwang/regular.ttf
278047492643756c75533d2acb90e0644abfe5df7bc6b99f21cf72a750580634  familjengrotesk/italic.ttf
9708dd560d1f8aa1f006461aa447a31fda7b9aff662d152837654a388e0eb2ee  familjengrotesk/OFL.txt
2d25fc41321a04561fab20a90fc8bc9ed4d1c0743fe8ba76cc51cd3632138b80  familjengrotesk/regular.ttf
23f51e2fda243a8759d5c32ff8a94da23dc697e8c9a014d4718aa0ab7ed3c808  fanwoodtext/italic.ttf
9ca8b9e5db7184105da255bb110023cf1cce6caa56186341bb7b09ba97b20ba5  fanwoodtext/OFL.txt
98aa9cbf5c5ece368501d188b1565ae3e7f6c9970ee3823769b8e67219dc33c2  fanwoodtext/regular.ttf
7671a5d122d2e303c7ecdbeb0e3ce552ec8ab644484d587e72ac71a06d3d9a07  farro/bold.ttf
2f9d46ed4ff595fe040cfcd11d41f80cd6b31b72c8e1b4ac793db50382cd3154  farro/OFL.txt
eed5807e2779c1fba1a1627a1d34b0450e4fc6a87200522e2f3e3f617221c82b  farro/regular.ttf
afc1cda4eedcfe27c8cf30fe3e9879587cb43cc2882d4cb91dd3e3fc9eecd0bf  farsan/OFL.txt
7bb968454a2dde084c9fb0f99a9921e9a8f96b0cd28dedf8f545ec23d52c3550  farsan/regular.ttf
4da248dc81a7ea4cf5b23f9cf7a0f8cad900875b3f52a928befb5c51e82e9438  fasterone/OFL.txt
382877a3a497c42bfeadfbb6e1b939d5b0f3f5cfd6c1a566c0c0d3d1f9b4bcb5  fasterone/regular.ttf
896b66a47308af2d268b0d93c59bb4c9e82870f63565b819e84f789c0825d992  fasthand/OFL.txt
f4a151d4d01ab2daf53e67904efd2b943c17ac7b7351de4e6ee7bda7697b0a13  fasthand/regular.ttf
69ac34f1c6fd163d5d01cea262da6cfa34fee1310283a116a0db8e14116b40d1  faunaone/OFL.txt
3c636067331e86fbf349924f3c1964155b99072a390caaffe60ce6c0866363fe  faunaone/regular.ttf
215b9bf63da0c9584b5a0aa8e2270da6a2b62c1281f5c39089613c3aaeffa2be  faustina/italic.ttf
2d8f6a7be96a15fd2deaa8e6b5320cec6c253216b5a8f7e1becccfc51147b877  faustina/OFL.txt
2ce2606f0ee1d493873c24818a391e02606ee76ac924b3d985cbb820c0a53ea5  faustina/regular.ttf
17d7a7f5d9f0139535ecec516988c4c73a2ec0f225987288f3fd6ee2622d4450  federant/OFL.txt
d40cb09c85114c2b0c9442636412e997d8258b383e1d1a684e7e32b21d07a5c2  federant/regular.ttf
75c7ccf4f537a7a3ebbedd299c1d2542e13d3b27aaf76a0a2d9fa91a2a8fcd3a  felipa/OFL.txt
d3f07e2669e046acc1030139a4b08046d7eca87c0b477a8cc99ac1c46af84edc  felipa/regular.ttf
8586a7e75681c7297af4cc0641eb2b29e882c5187fe189a1160eceb4e95d4163  fenix/OFL.txt
5104f5f344f64b5532850b131d7b9e033c112fcfa97dfef00a64c0a40bdae911  fenix/regular.ttf
9185cdf29ddad3ff97f5f07094345937c33f01ea232827a9ef9af9d88ae4b6a8  festive/OFL.txt
34940d4e68ffdbaee80e25d9ac8ef956eb0f4965c804d067041373ddca6a9ec8  festive/regular.ttf
94dec1f18b9275d69e8b4a91b6514bdc18199048347e1c36e1285b11b0b87653  figtree/italic.ttf
140d37233e7f3ce7313798befa9600893bcceaf41a55fa0fa5ad52f7f657a268  figtree/OFL.txt
26ad3db9b31ff7dde67a91ff515d022d2f495cd506590699cf264f0bfe6fb714  figtree/regular.ttf
d336c098ea798bf14de111cd90dff7d6bc340852405246511345d0f8564fe76e  fingerpaint/OFL.txt
fce000ae028b09ca53949172a838282c678796e1542d259e6da373e257377fc8  fingerpaint/regular.ttf
f9e652a2cb2fc2eebd95962011af876be07b738636a1ad32503c7b1956ef3a69  finlandicaheadline/italic.ttf
9d10d49e93d4f995e6f94e3c879a82c81d3065d5f4d3a3dd2dc62c9ef38d9f13  finlandicaheadline/OFL.txt
807735d6aa1f8dfb34c93256d9f696a0573f3c337e166c26666ac17137b3abfc  finlandicaheadline/regular.ttf
c31d0464b7283c93808cc7dcb8206ddb0780d6a8d50cf7f6a4fda8ec06fd8bb6  finlandicatext/italic.ttf
887ed28264da24f442f2583107d8006992cddf4882f37d07daa7d5cb60cd0166  finlandicatext/OFL.txt
6ffe79064e08ec7c3adfdfbd8905aaba7c7286b994b34c143cd9237cb0ab4175  finlandicatext/regular.ttf
926041dac670e6922505e35ac1661a4e8d20f1ffeabbbcb5edb5544370702369  firacode/OFL.txt
9335b082b3c7850d98a64b584f3417f65355f3471278bb5eeb8c6c0e8657aeeb  firacode/regular.ttf
61f0ca3ae72a83deb807040f314e1b8b4e40b08213df243db9fd430095cab305  firamono/bold.ttf
d1829ff3455bbf3b9d13dfb0a57758a863107c9108aab48558f26f37f1094180  firamono/OFL.txt
2e00b0cf3106a3d792f35711b7722740b76c02ee7300ea8c60f940584b7a8ac9  firamono/regular.ttf
1b96c16db9819bcaa9d588068bb397bb6e977c4874965d3d50d789a1943757eb  firasans/bold-italic.ttf
a4d8e149ecdd4874a0726eb0af894488b3b31c423d6b0017c8f415ed1b795b45  firasans/bold.ttf
a4204f9a8029c1c55daa5385ac95936f74abea3e232770f1fb2862a19d1dfa13  firasans/italic.ttf
8f24842e9174beda18a556c2ae7d54f5dc444340c19a3a9ef77e23bca366adbd  firasans/OFL.txt
c29556a2719bf613ef3d5e070e40d903a8965d9c081beca1375dc1e6e0f93c23  firasans/regular.ttf
aebe32d2d821890e0d66443ca2dc59b237ff34a575048696a96516d857ae0da6  firasanscondensed/bold-italic.ttf
b9371052e58ec5b709153dd0fffc60b5205b4d3435cf957c2522705b31b0dbcc  firasanscondensed/bold.ttf
57f3b2cfbb07698b9699e613369d33e06b61b827586b63341deaa6c573d264e2  firasanscondensed/italic.ttf
8f24842e9174beda18a556c2ae7d54f5dc444340c19a3a9ef77e23bca366adbd  firasanscondensed/OFL.txt
c67609f14fc9d328442bfffcc31988b0f76e5575cf460fcc1f3dd8e4912fe257  firasanscondensed/regular.ttf
037c729bd61f851f2ea7addfb2d7c3d40cef2ad18b133ef74f56916d4574c5f5  firasansextracondensed/bold-italic.ttf
3e385cfbd93c8a924ac4b33b0f33a39dd49c3919dffa2f661091a3f21cc4150e  firasansextracondensed/bold.ttf
088f1c48c502447c9d5c17f70f8096fe9e48074011c3500f9be2c75f2b0a9b47  firasansextracondensed/italic.ttf
8f24842e9174beda18a556c2ae7d54f5dc444340c19a3a9ef77e23bca366adbd  firasansextracondensed/OFL.txt
51f01985ca8dc740b951afd3d21478cc51cb1d8546136643c3b031a74add5479  firasansextracondensed/regular.ttf
e2a4888acd4f2b442eb692b754644d7600cda0eefe2fbab0118a9273cbc709c4  firjar/OFL.txt
77a23cca553d3d4f992ffe46dfb9687e54261cc82b5e7a4963ad026e64f561be  firjar/regular.ttf
047c204476dacfeddbf93d33ab3d43ba82fb7e66e398fdacfce8e815e9a5c270  fjallaone/OFL.txt
ce3b299625abe3c76f8acd235b57b3e07ac6ee2d550e106a4b4e4d60095ae2ba  fjallaone/regular.ttf
bb3ee29bfc75dc1ac4407831b665c92e9e58fb5e2e07022f6f731d8e063e37f8  fleurdeleah/OFL.txt
11f6c19bd52835c66cf6cf78f060a467a92a85f1d667447ea8feefdd9bccba7d  fleurdeleah/regular.ttf
54665278a85e00842c5a261c2bc51c4735082f0164edcd95da27ed11e253e604  flowblock/OFL.txt
41df2ad95d9ae2d3573e7e958186e04a852a44a568e5c2fc5fbd22e416b50acc  flowblock/regular.ttf
54665278a85e00842c5a261c2bc51c4735082f0164edcd95da27ed11e253e604  flowcircular/OFL.txt
ea87d5b1d0be7c5a3cf63054ad3e1d5ed54cca7491f9237a1226cb72f6340e78  flowcircular/regular.ttf
54665278a85e00842c5a261c2bc51c4735082f0164edcd95da27ed11e253e604  flowrounded/OFL.txt
dd3319188800beba4f303532f254880f77c513dfb8ee54e44cd7fa2fdeb25123  flowrounded/regular.ttf
b0daefd86530f48f6f57e90770276e42e63b3daadc9cdcf0cfd4cb16a7499946  foldit/OFL.txt
cd0f1932ed7762ce679b4f39dafc181660883b14d97a1260c074a88d3915212e  foldit/regular.ttf
c9dd3c7b24c11ba05ab1a6ec3a659c823f0e14fb26c14df0e93e82ebb60f3a25  fragmentmono/italic.ttf
ef14426248ca0404eae1ae65e61802b1627b5ec33aab117fb36edf401a81636e  fragmentmono/OFL.txt
0fe011f425873c2e0fc73a189e394e340ad48d2b9a99a576bdeec75cee000460  fragmentmono/regular.ttf
b9dbc7536071741814bf996e88fb7ab9e77dd0746634b63534888269033dee35  fragmentmonosc/italic.ttf
4cfdf959cf2faa15649053d5208e16da7ea2c63d0b641bcc4cac6ce2bed8ded7  fragmentmonosc/OFL.txt
7e6330281d72478a0eebc3a7a2f0dfb8fb14e5122fae310a70b9118d99012fc1  fragmentmonosc/regular.ttf
09685e225ba9b697b2ccd2d4098cac5ecbed0679960605258a271af60749887b  francoisone/OFL.txt
700fb5e4a5b6edb14dde2dcd481e5a9cac14281579cf42500170bae7cddd3609  francoisone/regular.ttf
b24448c43702fac4ee856781d461a0dfba8d8e594b6e8e190234b75fed2c0e01  fraunces/italic.ttf
bdf4c22802eaf804f998195871c6b8938aac2ac14b2d78a8bd66a6f1eced833b  fraunces/OFL.txt
177ff6c0f14e5550a3c624247cd1189611d4eb65d000b14944c63d967958abbb  fraunces/regular.ttf
60fea3a0da19167a3efb9c3792a3a15dc9235405d01bbec1233fdf3e79c74296  freckleface/OFL.txt
54b61a9f5bac3eb3a3d7f78f99d4d9c5d5688a9859e79bbf8704ae79c7f8f0fc  freckleface/regular.ttf
5c9e7eee5c6b25f4b05b8d53b2e470ea4962f9ced742d044a98f7d95d1375bab  fredoka/OFL.txt
2ba02e68b152868aef9ba28e24b3648c7d457fe6f25c761f2c2c53fb61a73fc8  fredoka/regular.ttf
eb42d30e111024646a167f47f3e85c5c2df21ceb36a3a279a6f19e2584b00ec8  freehand/OFL.txt
3f2f1155d862304cf29cc4252aa5df4d47468d127c3c12cbf16894b0dda6c833  freehand/regular.ttf
51421d8463941d678ebd7d28b93950c028352d36403187fa023e83dc0680b551  freeman/OFL.txt
48fac93ede204981c621a1fb039bdfcbbdf7e646aa7a7f823d4191bcebe16f49  freeman/regular.ttf
a40c3a6d0c968d3a10b17a2614606de6f20178deccc2447305f31fb106a57fb0  fresca/OFL.txt
f64340016a820093202ca6af533f232ee7fe4c3d8448601ac42b4091236b5777  fresca/regular.ttf
2fc0cb26f0d1945202b6022ea68ac566826d19e64b461b640e9a1056f1f40218  fruktur/italic.ttf
c0cd6d3807663a19c2d4a96f17b90a71a06e78bb329d45ad77c6798c89f761d9  fruktur/OFL.txt
dcba901b5fe11c0b6c3e8d5eb1003339b2dd020e2fc3949014ed0d8ff87715e7  fruktur/regular.ttf
22e37052104e101981fa0ea905457948f4f01bd31c7fde0502ff25c586801fa1  fuggles/OFL.txt
2e738fa143601d4415c858d8c844f12333b49c47ba5c12c787a0f6fa150e152a  fuggles/regular.ttf
a32303f6ea3542927121212a9e4f3fe3548741e6d448d9dc6f29e97cf50102e6  funneldisplay/OFL.txt
b4151c9c4b7b07eb74320096b4ff4156cca8821f5adfab34af9fd9a2d6c1179d  funneldisplay/regular.ttf
bc8670ca582ceb02139c7d301b7bf0d87bccc56f16173583d8aa89829c98af0e  funnelsans/italic.ttf
a32303f6ea3542927121212a9e4f3fe3548741e6d448d9dc6f29e97cf50102e6  funnelsans/OFL.txt
652c9834434bc01835c4e75a73d3c7e42ff2e4beb261cc851cb911e889af6a77  funnelsans/regular.ttf
197945947b2b8a0b9fc5622d9136d5f83c423f7f2e900c10bfb8b8cde8a45c47  fustat/OFL.txt
ba09d90e6180e79334aadd42ea1ed0e97a405fadcd34412c1d02a6b8f679d402  fustat/regular.ttf
f18fa58c66cf2540800f10ae4c9ae315c89149c41ace2a394c5efca7354c4ea8  fuzzybubbles/bold.ttf
373164fa83991434f3fcfb9ef3cd0d8d4ffc44407841c08d9d6a43c07ffab978  fuzzybubbles/OFL.txt
407829f1e0b6b73a9482ffdfd22702bb149a020fad33f95eb30bc98bf9d471d5  fuzzybubbles/regular.ttf
21506cc7106bbfd4aa1c40371f33f9f4296182a8e4bb46658e99af24feb4bfca  gabarito/OFL.txt
8650e2bd7747f7d74619fd7aecbcb0309e6f37b7964024f3fb15ae4833b67ca5  gabarito/regular.ttf
c5478a76bd760eed7b741678b71d9dfe1062e7399739a3b6da8ebe00d19715d1  gabriela/OFL.txt
c38334bfff10cc97fa6e5c5ddf1f12dd54428bb218d7a423fb3c07bf8180bfd8  gabriela/regular.ttf
eb6c70cb6b575ad22df022d454df7a20582915e6e8da19b579c6cbef37a26bb5  gafata/OFL.txt
a816ae1fc683a8c093666b3b7f5de8e8dbdfca658459a484138e65378d4326b6  gafata/regular.ttf
4e9a7cb5e08ca48e87b31184036b705690828000e1b5e8777f9ec01dce84aba6  gajrajone/OFL.txt
eb924f0e1cb9f29f129a76645dadcc36d0f3a831185ac530a6b5af607ae06231  gajrajone/regular.ttf
6a809aeba8af2115ca4b4c3597b1fbeb836a45f0489070f330f9c2dff870da8d  galada/OFL.txt
acc22b41ee470dc542e15b5f8907c7fbebef1b9c01eb20e4127bdbf052b006ee  galada/regular.ttf
117fa195cff980e3b10fd8e8e21658c6ec954b0886647970a03c9694d3553b69  galindo/OFL.txt
335a73def6a890d38e8793a81077a8e15987b1a4e5366847e138b5beb13bf0fe  galindo/regular.ttf
8778610a53692ed2fb14015f43af51edcd9ca09eed2a0071973cf3954a079f66  gamaamli/OFL.txt
68466b07730b44635898ee56c5bac8d89903b62df2d93ef16e7d4120a00a6638  gamaamli/regular.ttf
968f9aa4c6a6f7ef4f6995533c9492367b4c7b5e8b4912db555473ecfda24e0f  gantari/italic.ttf
4d95bf0e5a54632046323a75fb31f8e2af4071119482c02978746ddcd3866248  gantari/OFL.txt
16b83edd620efd401c7855ebb96694718c29f55f4198913dfad4791591796e71  gantari/regular.ttf
a13e353470a9abc44e015067bc353fd3ebc3ea010dea68a00d56f961ebe8f7a9  gasoekone/OFL.txt
73a6b8e0d12a56f0a070f19b44a93ae050f98eb926da5d2a7c8d6db92bd8d9c3  gasoekone/regular.ttf
ad62d4ab2990d5bba9203c205513a8e162a44a03c58269f9a8b138cad9c0d5e3  gayathri/bold.ttf
b2cc52a7162f0c8f71924211d040de37b19894f563a0190a75c017e2dc28d08a  gayathri/OFL.txt
c4fab5d994518247f78d96bf212a7d5b36563b60663136765fbaebd33a74d4f9  gayathri/regular.ttf
a464348abe41a6392f18d04c0ac2ad3c26619357ff5fdd76aff3059116f45e62  geist/italic.ttf
1781d2806a07d91c4edf4740b88449fab7d0eadad53f7c351b94cd4d4eb8c00f  geist/OFL.txt
73894e0448cae90a92b6c2f8732b7bb9acb7b94c418bff559dad4a18e1de9659  geist/regular.ttf
70c15be47d55f637197f7e38570dbca16b35777ea647dc3598f61bf3961d2b0d  geistmono/italic.ttf
1781d2806a07d91c4edf4740b88449fab7d0eadad53f7c351b94cd4d4eb8c00f  geistmono/OFL.txt
d00e590b8eb3a59acc329b2d044fd143ae935090b7da33199ebee27cc7de8196  geistmono/regular.ttf
52559e845a4d33514e5f93bb9ae7dbeae1894a53f2c565a15f18af40cd337c09  gelasio/italic.ttf
b393cb01867c919b44381512120dc3e4c954c7b47e2035c405f3a324799a4d29  gelasio/OFL.txt
4daecea457258c9ebeb8bc99ed3fd24353618bfad3ea4b93fa0b5d0468fc04e4  gelasio/regular.ttf
9f1dccdd6211e2bbb679318dba3717d9eb1e3edc6fcab54beed05679d83a72b5  gemunulibre/OFL.txt
e723b7f44b06b2443b44eb734f32794eae64915029842d2b2187eadd74b377a6  gemunulibre/regular.ttf
88591d5374bc8ec1d7e4e1151f0289bd00a71903a52a380379491afd730a773e  genos/italic.ttf
c29a3fd5e7962b626fcbcf6713d47ae4656fded06335b607d14f03a4a25cb82b  genos/OFL.txt
88a32589d9d8615ab728977d647f5e5010dbf789050d4cf25d6607b14d49a1f1  genos/regular.ttf
778186245840aea0e60bec6a46e7fb1442e0cd78e41afeadffcd3e8824b379e0  geologica/OFL.txt
9124d9e88ac6c11d761f35241713a51d68e2c4ebedce0edaca834717a00959ec  geologica/regular.ttf
f448d04a281a0e8198a109e1809e145ffd5567a26299c8b2b772297de17500ad  geom/italic.ttf
614e89d16af045c1c32716f67d1e826c692cf643c549cba46b38d41d6919d77b  geom/OFL.txt
4509ad62e97c2e07c7fbc51180caba092b66fb2967e4de7dcba149ab3beb3b15  geom/regular.ttf
960408491caf9fcbe332b633d4ba895ee32df0f494f793fb4185c7937d172a71  geomini/OFL.txt
baf3fa2b1078c6a5cac05196889c01d63536ed6233e705262c7e6d4fbefffa59  geomini/regular.ttf
321be0ed8688ed27a2ffd3e85efb9e3c7d9229842b7d9ba90999bf36e672fb00  georama/italic.ttf
e913854957b9c1aca0c81b29fca565827185ddee0f5a039319e0e45e1b7b3079  georama/OFL.txt
0a62419702ab557e0610a5a073a56f246d13a7db094ef97945a0aa56faf14ab1  georama/regular.ttf
c72eaa495a68969eb124218d20d3a6092e8f23ac1d25b9315d1014c5438f43e1  gideonroman/OFL.txt
8edd923657529e420382016e8f0a395d2d526c391328fc97cf4d42ed2d18bdce  gideonroman/regular.ttf
5e5e983d51d32974fa4ba6d1ed7e5ba75ce17575f49a2f06ba17e4ad5c5cf2fa  gidole/OFL.txt
7a9b54e2ce1f582cfcd1aa39ca025cd125084f4fb2ea35969d21f6544aa05f23  gidole/regular.ttf
96decc81ce07f8012ee0021a5b89befb6aef12d0d2ac53a3637fd4b583f91e08  gidugu/OFL.txt
1d10013a9e298e9fe79015973e484f3641bf8a1e7b5b58231142853a14bc80f4  gidugu/regular.ttf
e8d94225bdcfecfb5a6e14bc0e2bb26fe48670f28ac46a7d676d9a90d8bfbe24  gildadisplay/OFL.txt
8ca5475692552cd4f149bcd00099c098453c39b8541f4abe2192f84ad17a7aa0  gildadisplay/regular.ttf
5a8469d3fe72117eb9b630747cfd9f50a31d81b7d18c112cfc9fb368509fe739  girassol/OFL.txt
84c229dea2428bf26808d985a44262fd57f47a17b1722497c9d4ec5bba94fafc  girassol/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  giveyouglory/OFL.txt
fb71f9a46a3234c2d98dbbe44e711f65654368031c57b927bf7679a46e278c80  giveyouglory/regular.ttf
8ad5922db134fe9bf9f2691fc5554293c06884cf89823f452fc76db6b3de7fef  glegoo/bold.ttf
638774cdf8233b5ddaf9ebee1821e9de1d5d59c335d8ee3ba0b47fb17833b502  glegoo/OFL.txt
237ca320ef867416c46c6fdfa6edc2ac5f49a121396ad0279a2e0f8ed7aaa3b1  glegoo/regular.ttf
321e28d45a430e017d9d1d6a47ef1fd261aad354723b014cf1933a765036c311  gloock/OFL.txt
c3a67e0212f7da01764796ae721cb9bab3e122d142354f97cf9c63fb763e6d77  gloock/regular.ttf
0e441ae9f18ad0c294cc5b6ae3974c2db1614cab220598578b1b58c4cc334485  gloriahallelujah/OFL.txt
eb59f2762ce8785a292bebb2af3b3e6aa21454913d791f5f25441d1d57ead9fc  gloriahallelujah/regular.ttf
f24daaa4671778f0788535471fe9aa6a0a09ecb97ee644d9a7b5801de9f6cb94  glory/italic.ttf
9a1f7cf2f267af05d4816ea6340087454ea1d237bd9f29a76ef3932ec4055da7  glory/OFL.txt
7282178080ca4fc5feca7b6ff96212acee58462efdff8a43b80d67204f100837  glory/regular.ttf
9bf9f51b4e1279bc28c6cf78b4d3d0a07b254435a79e6597ad244defa6df1882  gluten/OFL.txt
cb4b01e4754e36615125e7cb16fe1ec8255d1db02d0b236d7c992438dc1a83e4  gluten/regular.ttf
ff532f9e8789f09a9fdffc3c0954eedfb0a48be77b2e2eb90f5f82e4f347f50c  golostext/OFL.txt
17bb58fb69aec2dfb047a2ebf52534023e9b688c97a6b7ac795b0a72912c2063  golostext/regular.ttf
bdf116292f27aca16e2aefb5534042a25f244d3a9187a521ce97fc2117a4a844  googlesanscode/italic.ttf
ff8f4fbc4f1a71c7d4c6481c48dc2b21c43f8dc15872536667fee45c15d20928  googlesanscode/OFL.txt
c9649573afcd966f61096b1e9c3c3115e7b54315ca2adf9839c6f8b17d5f8e1f  googlesanscode/regular.ttf
26b8259c2f61ef10dfa2a2fe1d1e113dfb241d6f780ce15878d005f86c1465c5  gorditas/bold.ttf
860cbfdc9dbc3f0e8d35af80c31e8f20945bff393d4f483dfc157469e01d321c  gorditas/OFL.txt
95543aaa4c3e1dc22b220b29bcbd8618ff744d904ed4c23179ab5a911d554ee0  gorditas/regular.ttf
159eb46ed0b08f8b9678d6f22f54cc614452d4ab0fb670b568f7a5f315afe511  gotu/OFL.txt
766fbfb19d8a0c38814b23c42515ed9dea538fce18d741221eca321d0604a3f5  gotu/regular.ttf
58bdc69f4c6177125c6e7cdbc78f710f5f9952f11bba7bd5b17bd7ef169d731f  goudybookletter1911/OFL.txt
62d219942d2e4a3a8473c116254966d308820ae1729e2fac3730e66c073a5548  goudybookletter1911/regular.ttf
2643f19f015fe49e170727d070b7ee501d3f38e0810208a0567aff7b656a1875  graduate/OFL.txt
971222b309851d86f2513f89b510dc52d52ef7798b5f43af2c6f58d43df568e5  graduate/regular.ttf
4d0bb797c98a0840faec0952153a4030442f263fcf08b906e38837ea8f401808  grandifloraone/OFL.txt
592da2454a6626ee68558e220df28808b95f7dd140cd1ceb8a0d72b777f157ad  grandifloraone/regular.ttf
22ba556757942fd2b3d87aa087ce88d7222492c5440c4f009144770dcb68bd0d  grandstander/italic.ttf
c98642ce049ee94f1868c47db44dbdc69e1800e2cf3edb539f030ac4abc22ceb  grandstander/OFL.txt
fbc7d1d934e6aa7842f7e8420cd833eca9eb123d61880075eec68751369e2f13  grandstander/regular.ttf
5818012656b5ba904c83dad6a0011bd25071d840231f83d69ba34eebd5e510e7  grapenuts/OFL.txt
d4772724931dbafc507c610f10d8cffa4602f8b8e8abfc0bd384996875af4134  grapenuts/regular.ttf
61093a21f5e63dedf54222b3c09997e54c0fe43e3851d21386e02ddcbc246d49  greatvibes/OFL.txt
8d509802186f1b51572531ecf313e8098f9a5bfdfaca93f0c9b34467f9982d15  greatvibes/regular.ttf
350eba96ff4c979070566cd24d068784c482a65d1485dc14e3ccb56f06594972  grechenfuemen/OFL.txt
0048d2ccb3f58ce8994804be5764e074771977f4add2f3dd12dfe9a658f1adc0  grechenfuemen/regular.ttf
60e9821fff9603945d835a73257a743a8c6754fd3fda1e4329af50ea7e46f9c2  grenze/italic.ttf
55a21d1fcebfa5e02100db3ae4dcff2658e9ba63e0b64149203bf6a9d645db86  grenze/OFL.txt
04afa4836bcd41e1ff9867a0dc27d628d31ddec618ec67715c526ebc3cae92f4  grenze/regular.ttf
bca29af2c3c9e142d11f523f414902ab8fb9ab8ffa3c34c63b6b72aa4e7d6acc  grenzegotisch/OFL.txt
701b299d8dc002a2b4bea2ff0f1272c0e4081a2835914354804565c410d0c637  grenzegotisch/regular.ttf
1bd29b2ddae760a1f7014c59fedefb0b110f91110d25080615bcdadad83dbb87  greyqo/OFL.txt
1ed4701c24145a2a3b4271c48fe27d3ae082b98efc7619c1e7ee5b29ffe2cd67  greyqo/regular.ttf
513de41f10e2a9e374fc23ac57dd0bcea4070ad7aaeaeec2e16656e025a2e19a  gruppo/OFL.txt
b14da5eb049a6dd097c79b0a7d55450542ad0ff213cdfea492815a79c58244a7  gruppo/regular.ttf
391ac3126dacc95b92a8f3408467879edb3245344bc411530a30d5aada52df92  gugi/OFL.txt
c0b1f979979cfc309fb2438fa9464f96173353e0c4842cc7a5919658184ed9d3  gugi/regular.ttf
42d665be2bd66ea6445e0a37cb6f80eb4ac10d56cd0503efa0c6d6d6ebe86de2  gulzar/OFL.txt
246337973ac64e8b70fe611405dcf32a395a8885c4497dc45dbc4975d3ac0831  gulzar/regular.ttf
8fab8a84e5a47c4c5a5a4449ca62e3a6492fbddadd778de9d9fb2d3b1b36989c  gupter/bold.ttf
d11742efedc994c84a152639a76098e3de6c097d77c06e3c4155b8ac00ae9328  gupter/OFL.txt
cad87b6c06ac63e24f2b9741c0cbe4bcf5945826696f4baca61933c959052cf6  gupter/regular.ttf
7fb2b048e87a37f6f5b5002ac2dd95ba82bbdf4e02ecbdc44a8cfd8cba3dc80a  gurajada/OFL.txt
353c1289a6f4ba743154c870418272cf68e0f63c0c38598ed33cba814d3178e8  gurajada/regular.ttf
d9b228718f3f81e69ce614c6b2f4c382fd34396ca8149b4f28d07e85b8781eba  gveretlevin/OFL.txt
05c443395d48b97f43469da4fb08772a4c612fda306348577dbc40a1267912b1  gveretlevin/regular.ttf
de7cd081e615049aa4b8b4cf2b6fc70ab70e6a7ba7b2c49853a7f296de141c40  gwendolyn/bold.ttf
469761758d333ff4ab9f69759dbb8576d23077097862654c2e4d1fc6f19d090d  gwendolyn/OFL.txt
81f114a0ffa9ae461fa84edc90f0ff502b4c7c0aefe6d4e842fff478214a62fc  gwendolyn/regular.ttf
ee33e5ad2f8b8ff03ef91b286ea3bf93583cc162b614790e2ddcfd5772939daf  halant/bold.ttf
f62ef357d3a1c3d27edd35a6e1ba350e8a8d13499797964eeadefbf0b3b15d1f  halant/OFL.txt
f646ffa1cdf2d4ab36326943d3494c98416264f4df40f8e7bf86211de571df07  halant/regular.ttf
1f581506286e960436548dba0701aab278f7e67f2adc6bdae2958923867d1e64  hanalei/OFL.txt
000ddd2a6be57f52aa41876c2ba71310e2a711f0343c1bdd71e43c9f137000f6  hanalei/regular.ttf
1f581506286e960436548dba0701aab278f7e67f2adc6bdae2958923867d1e64  hanaleifill/OFL.txt
1916f208a0e8c2d1b9535e26f8f77e45b641e98f9bf16e809cdd478367b641db  hanaleifill/regular.ttf
934a45d3b43276e1f857301e9cb07e00b829cca3d0c13e8e6f8c6790dd6c8a2c  handjet/OFL.txt
9262749e8bb0b73ebcae0e20428689c3c59576eebeb6c4e1020300d2d41bdf4d  handjet/regular.ttf
ae5731726ff75301a3cb63f2e98d1babc77d55ab09fb8e229ca75f5bd46fbe32  hankengrotesk/italic.ttf
e02ccb89a86839b22feff7872ff5cc355cc0f58318d29eee20e2cf83a612f16d  hankengrotesk/OFL.txt
813b3f8fa0965405669a89b38e51bbefd95eef6b8e20d1cb2d8c10cce062662f  hankengrotesk/regular.ttf
a25f2b569874c06136214f53bcf419fc4c942a4da8257dfe189b2728bec0d15e  hanuman/OFL.txt
0cb2c9dd733d7357d5b673f55d756ff9ef50dd68af9dc217c0d5a71719665536  hanuman/regular.ttf
bff4e5087ece354afccd073621197bbb7dd9349943b5ee6aa12b1adf0b133081  happymonkey/OFL.txt
154d17efd5043e9f76ea4b8a15743fe19634c7adbe3531d6af68bec8a0c7fad3  happymonkey/regular.ttf
c0de2f095d2e43a90ddd7e18705b41e49e3536669cd2b7ed57bfeac5a2a988a9  hedvigletterssans/OFL.txt
d4f20dfa9c65f2ed46af3ec66e055aaa56c30abf1d587ed2dd23f38146647df1  hedvigletterssans/regular.ttf
c0de2f095d2e43a90ddd7e18705b41e49e3536669cd2b7ed57bfeac5a2a988a9  hedviglettersserif/OFL.txt
10eb164574c5858855e2708bb12a628a385e021be5dd9ff2f586c4ff73b8ce5c  hedviglettersserif/regular.ttf
866747cbccae229433e946b90fcfc457b81c33ac89e593855770851354f9e6c3  heebo/OFL.txt
18f930b583fa8fe6b40b2f8263b7ac6afbac07adc91a12467874e7467d3ace30  heebo/regular.ttf
66f19a3655694659983eab355b8833b54e17d34f653d5ae5b86cb90c0550a4de  heptaslab/OFL.txt
737badc7944d5b6f92c05919995240d6ea70e86bebe45d196e61677e7a901f29  heptaslab/regular.ttf
6e54fc004ebeb61322ecab1d86334ebf69e7051632d48eca489beee505d70762  hermeneusone/OFL.txt
53ff8b668ff603beb3a15b298c35d80932f57a47c889e6e96bb93d434da25808  hermeneusone/regular.ttf
abbeb9ef10e2c5100e87d3e24b0eefbcd4c8e504634b675697214671d67e0782  hiburmono/OFL.txt
b53037ea7a7610a99fda2b1eaf29cabcf19225f4c9b97f635d2ae6ff00bcd8bb  hiburmono/regular.ttf
330c54396bc27628c32e69b88654e41065722182c6f33b936a2a46d72c9d6774  hind/bold.ttf
f62ef357d3a1c3d27edd35a6e1ba350e8a8d13499797964eeadefbf0b3b15d1f  hind/OFL.txt
01de158022f53077b52303e46de3b0ab5fb245222a7ffe25a2a57fdd9e969162  hind/regular.ttf
c32801dc19d5f50fd49a6d8794fdd8e89300cf4618692ea27feec10f1952b2b6  hindcolombo/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindcolombo/OFL.txt
b7faf28ff25b882e2024fdf7d933ecaaa2a6e7fb26cef09b45a5a9fabe820514  hindcolombo/regular.ttf
e3e88e87a47094b34d1b0bc4a88f700cb1d1d35dd6286bd224bc35cc1712b167  hindguntur/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindguntur/OFL.txt
2f9b4d31507c92fe1d54e5256904e41d91698b952c90d66bfe926cd156dac4eb  hindguntur/regular.ttf
40ae9e8beea31bcf27e0a223424a5b904de716f6d3343c9425a268a7c04ac1a8  hindjalandhar/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindjalandhar/OFL.txt
ec31a2104441edd54607610e7c9c14a13cb7fd57d63cff24330a1734a4dad7e1  hindjalandhar/regular.ttf
0015eaed80482e33b9cf4c18941e3250915ca5b8bed428b8b0f9d952496f3726  hindkochi/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindkochi/OFL.txt
be4ef5af5157c64ab86a758580f9cc41ade446c256fd15070800eb8fcfcdc639  hindkochi/regular.ttf
842086c4312100a032494dcb43fa7afc69ad5772fe004865e0761f92165910a1  hindmadurai/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindmadurai/OFL.txt
8bd56d6002d4fe4f5f378dd29f9ad382dbbd03a2bf16da24599aabe33f9b55b3  hindmadurai/regular.ttf
37e0493369db44f74d42ef36c2dda9a1977f9a724e5ac51a2ca7edd38189aa28  hindmysuru/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindmysuru/OFL.txt
a38a33806d9f008fbdf204d2f684e80b23cecfc42ee0c2aed81c7b3a8333e7f2  hindmysuru/regular.ttf
d135765781d1a4aebc7dd4a2af221427ec8689060121d8a48b19bca3eeb3977e  hindsiliguri/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindsiliguri/OFL.txt
45071a7da902a74877f432722f525d00502d61aef71fca4cab3da8a23156c33d  hindsiliguri/regular.ttf
756fbdd4d4cbed464b148eda63b7008e4f2e06d8aa140d2b594402ee70aeba8c  hindvadodara/bold.ttf
4b255eb44f613a8e426e195f0d0b7e10fcba1af7eb6047d9a7f4f3c449940e19  hindvadodara/OFL.txt
064d35104e20e5508f2ed40d0634e30fb5f990aa011d884e0b4541c0fb9d881d  hindvadodara/regular.ttf
5908f18552502712eec2363a96d1ac001748d649e6526fd28a84748588b81283  holtwoodonesc/OFL.txt
17c8ed01cc4557554749f9435798a7d18afbc97fd0c866405edd38a40470d96c  holtwoodonesc/regular.ttf
6b6c6721a30480a323cf33acf6a7703dfce46b846827a65f8ee96230060e3c3e  homenaje/OFL.txt
0bf7bae4aa3e7c2c674785325d20f4405a53f25ace4ceb4752cf75e27172be4a  homenaje/regular.ttf
8e16d5b25106332b4330ab02f59bfeb7bb40ba0c060c3053f4c08d4ca8ae4d22  hostgrotesk/italic.ttf
f04ad0873907546e160c7a79b1e42bd3cd380c7e5ee4c1b3c11f43faca1675e7  hostgrotesk/OFL.txt
74c77b8e850d58dd3d8b22e39111a73bef3450de9fb57018ef99119f2d484f5d  hostgrotesk/regular.ttf
0f3199eac4dcfc512e37593730841da3da6a937ac633c3f0f61d13355d3744d3  hubballi/OFL.txt
e51ad77d40b5adccd6c6ca537863ef4e364bd374c56593e007fbf5402a9a1cdd  hubballi/regular.ttf
785b129a5b9c8f04b4e8883dd26235ef7ae58d862068726a3e254092c28bc829  hubotsans/italic.ttf
9593ae8ccefcbd9f3dea9e4da74b421ea04da7f597e8e64250f6419fc6032139  hubotsans/OFL.txt
229c7682f64b499668d2f47ac803bbde0b5a63225326c8659ea436748ab29965  hubotsans/regular.ttf
064358800fe0bce38e0f0c75f748649b702b221dba298bd9de2e6b4026df45b8  hurricane/OFL.txt
5ea86b562ca5c2b1893c233367cde1aee0d677bb6d30af9c3f699c270880da13  hurricane/regular.ttf
2ead710644460a0433998baccda6070207ad819c027cec442489578b580e1f6e  ibarrarealnova/italic.ttf
a642565cd75e9535acc67679fdc6a8a99115fb437b764e86b4d82b03d8b17945  ibarrarealnova/OFL.txt
c627ab48daf6544099014b4c5c7faa4e3b993ef5ec77709c89dd37efd4107ddd  ibarrarealnova/regular.ttf
af4e05a761e98c1adf064c48a6352c9bec1a6ad70982cd2a544149323391f98e  ibm-plex-mono/bold-italic.ttf
ac27abd6450a64dd94467580a02fe6235156d5b92f2926ebbc8e7489df64e0be  ibm-plex-mono/bold.ttf
3362fc791b0652193328b862c1c5f23a789bc7288b1617fa63302f88689a2a34  ibm-plex-mono/italic.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibm-plex-mono/OFL.txt
6a3412f058c7d8dfd9170c41e85ade48e5156ecb89356110ca57a0a27734af46  ibm-plex-mono/regular.ttf
0b94c5e981993764db32bf9c610ecc60cbd34ad77ec2f10ba03c64ab75124d8e  ibmplexsans/italic.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsans/OFL.txt
3b031aa4216174205bd8471f88a49b91f093169e9e87bd5262242bc5967fe2e3  ibmplexsans/regular.ttf
691e0c891a38637ae6bbdb69700f8042cb0724a137bee615068ffdb92244f61f  ibmplexsansarabic/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsansarabic/OFL.txt
6f611412270a132bbac838da9259d4c68569b4175f3b3b8fa3fa36a30b56dab9  ibmplexsansarabic/regular.ttf
fe1983c07a086fbee939e5f0f826e5428f7d02666c8e3bbb7295fb3504597a07  ibmplexsanscondensed/bold-italic.ttf
b65492d86cdd5cd9d43d2671b55d5d36fec36859fc8b08bc6aba78e441d6c849  ibmplexsanscondensed/bold.ttf
a0320e60c17926c4e210dfdb3b1a346991f35f83b471daf55537ee79cbcb7c7f  ibmplexsanscondensed/italic.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsanscondensed/OFL.txt
e7437c072eef2ef592ae6f2beb0000446287385907abb57ac1cf07bcbaa2aa33  ibmplexsanscondensed/regular.ttf
8c1a55530a59f4d3df71e36ed7090e78511cf1e03c32b932c693ae6ac603b38f  ibmplexsansdevanagari/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsansdevanagari/OFL.txt
9a309796ffbe3b6827591eb4e6e7f13e273c38d37b40d12a5ac695172571e88b  ibmplexsansdevanagari/regular.ttf
4468a526f606ac74e8db9125b785a932cf55a265f8e358855371bed6126a1637  ibmplexsanshebrew/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsanshebrew/OFL.txt
c11df42adf5e2c6e77e623dbedbe8cc23ba72196ac9ad8beb02754eebd9c400a  ibmplexsanshebrew/regular.ttf
bd8a98b9b55c9ea3f0fa1ed094c15981788cc9a41b0357f4453014fd1d44da19  ibmplexsansjp/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsansjp/OFL.txt
372f8bba95f386856ae435dc0e69f08db1cac29bed513d99171a0ae2d307ba2a  ibmplexsansjp/regular.ttf
f88fbe0a3717c93deddf4b13e50a05c9adcd38f58d675d9d5d0b869961851667  ibmplexsansthai/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsansthai/OFL.txt
eee061d1bac39be40f9bb94498898cd1894f5d3d9a2f0ee6cbd48a6bd03d052b  ibmplexsansthai/regular.ttf
df53c5c794b910f68bb8f3075a6c9bf59261c3ad964bd2be0ddff1bd4c79c7a9  ibmplexsansthailooped/bold.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexsansthailooped/OFL.txt
6d7910d13a7a9e33872d5501fd81a71f84ee532f729bfb72c6ffa94d1f13009e  ibmplexsansthailooped/regular.ttf
2a32b76ac19c1942bf5942dbbd2a1566e5f1ae9833e421ebcf36d3522715e153  ibmplexserif/bold-italic.ttf
534c02c295999dd86e770457ece1d43db0de9256dd98bf741426f63ae904209e  ibmplexserif/bold.ttf
4b75b38be4673527231f49c48818d090c913d5042dd5c747b525bf6185d29ecb  ibmplexserif/italic.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibmplexserif/OFL.txt
e882efa9c41949a528ac2369079ec5ef050c1c996bbd0bacce3c3326d44cf80d  ibmplexserif/regular.ttf
6bedaf6a91cc0f23c61b1be288107e7aab97913447575c6f59f395e4e04b4588  imbue/OFL.txt
bf45ff1dc01974acedf4f11bcbfa7365053d97f4d598ddafe189d238ac80a534  imbue/regular.ttf
42b758018a3f0fa429f9aaf7cafaa273ce922ea7dfba30f50cc828b8aa3e1717  imperialscript/OFL.txt
fa040ae596cde82559c3bcf056ac216a94efa904b848382ab85740d38df4bab7  imperialscript/regular.ttf
6afcd25837be87e7c564f594d20ee009b4bfa540c4eb2d274992e2b1483fa3c9  imprima/OFL.txt
c563e40bc5609b8c7bcc39f93cba05455c0d0b8c43460ff991d2834301609c08  imprima/regular.ttf
1b94e7bc731a3d91e358bff9f9253ccef36012e214c0ba64661741fa44494b2e  inclusivesans/italic.ttf
0690e0819628a20c5ee68388a7bae621e5c3e53be57276169decd00111d8f2cf  inclusivesans/OFL.txt
52ae5fdb8eda45633f1e9817ebdb07d8075c89081d51204f16f78394608a5c4e  inclusivesans/regular.ttf
29bd0cfd0fb2a45f9b057c834a057724bae1f63b525a8ac83d3e7525706d9f80  inconsolata/OFL.txt
23ded25b447074d00659392bf9b1123d89df55cb07b0ad9bfef3366d199b5fcb  inconsolata/regular.ttf
d9cdb075679d15a99bab2a8541b9c4fdc71347502111fbe9affd1d462219d96b  indieflower/OFL.txt
ccc94b22b156e9c5dfe50fd051f01b097600b252c24473e624bb43a143140a94  indieflower/regular.ttf
8cf345e9566428f6171371bbd5bcc7f8ebe443712b9349267dc59391b7d4aeb1  ingriddarling/OFL.txt
f08b43438d6dc7742a9c0434e7199e01272a2c1b2b135c9a886f6517c9e5ae4f  ingriddarling/regular.ttf
222a233da522553541938fa7780d3bcc008af009679797658885f0052ffb76ef  inknutantiqua/bold.ttf
3c6545e1923c7dbbe2103b93023e21514d005012ef6543f90ecf51ee45667a73  inknutantiqua/OFL.txt
d46c7420b1e5fedc2086c8ce89275a6ed13c6778829c0617f56df8c3bddd686f  inknutantiqua/regular.ttf
acd98e64795781b2058f07b18475e0ecee2a0fe2b42a49e2f9e37d0d6bf66ce6  inter/italic.ttf
5b9321a4298cfeb6b34354164a1c3afc3db114569984c502b9b35d988fd58c57  inter/OFL.txt
29160a80ff49ddcab2c97711247e08b1fab27a484a329ce8b813d820dc559031  inter/regular.ttf
22d8d8854b53807aa664ca34f2031a9ed57a1d0dea296b8b96cdd3aad937a2b3  lora/italic.ttf
1d9a970809ac804b582a6ce7f0ebc4e7fefcbfd7ff6299cad35ee656a21be716  lora/OFL.txt
822a6621ccbe8d97d20ac88c1c41f5615c9c2c202eaa75f272cd452aac6475a7  lora/regular.ttf
```

## Commercial use

These 520 families are released under OFL-1.1. Each bundled
`OFL.txt` contains the sentence "This Font Software is licensed under the SIL
Open Font License, Version 1.1." and the license text headed "SIL OPEN FONT
LICENSE Version 1.1 - 26 February 2007". OFL-1.1 permits commercial use,
including bundling the fonts with software that is sold. Use is **subject to
the bundled license terms**, notably:

- The font files may be used, studied, copied, and redistributed with this
  software; the copyright notice and `OFL.txt` must accompany them. Keep the
  `OFL.txt` files in this directory with the fonts.
- The font files may not be sold by themselves.
- Modified versions (subsetting, format conversion, editing outlines) must not
  use a Reserved Font Name. Reserved names, when the author specified any, are
  in that family's copyright line above (for example "Lora" and "Plex").
  Modified versions must stay under the OFL.
- The names of the copyright holders and authors may not be used to endorse
  or promote a derivative product without their written permission.

This summary is not legal advice; the `OFL.txt` files are the authoritative
terms. Any font added later must be checked individually: not every open-source
or "free" font permits commercial use.
