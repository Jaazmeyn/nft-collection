import React, {useEffect, useState }from 'react'
import findOwner from './findOwner'
import './Nfts.modules.scss';

function Nfts(props) {
    
    const [atomicassets, setAtomicassets] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoader] = useState(true);
    // const [ownerAssets, setOwnerAssets] = useState();
    const ownerAssets = [];
    // const owner = findOwner();

    // undefined?? -> er wird von den props mitgegeben eigentlich....
    const owner = props.owner;
    console.log(owner, props, 'props?????')
      // const url = "https://eos.api.atomicassets.io/docs/#/assets/get_atomicassets_v1_assets";

      let url = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?owner=' + owner + '&page=1&limit=100&order=desc&sort=asset_id';

    // let url = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?collection_name=womplayextra&page=1&limit=100&order=desc&sort=asset_id';
    // let url = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?collection_name=' + owner + '&page=1&limit=100&order=desc&sort=asset_id';

    // womplayextra = the collection
    // aber auch accountname:
    // EOS account names to test: womplayextra, wombatmaster, wombatpromo1

    var requestOptions = {
        method: 'GET',
    };

    const loadData = () => {  
              
        setLoader(true);
  
        fetch(url, requestOptions)
            .then(response => {
                    
            if (!response.ok){
                throw Error('ERROR')
            };
            return response.json();
  
        }).then(data => {
            setAtomicassets(data);
            setLoader(false);
  
        }).catch(error => {
            setError(true);
            console.log('error', error);
        })// catch
    }; //loaddata
  
    useEffect(() => {
        loadData();
    },[]);
  
    if(loading){
        return <div className='heading nft-heading'>loading ..</div>;
    }

    if(error){
        return <div className='heading nft-heading'>error :/</div>;
    }
  
    if(atomicassets){
        atomicassets.data.forEach((eachAsset)=>{
            // if(eachAsset.owner === owner){

            // only assets form logged in user -> is already in api,
            // logged in user from input.
            ownerAssets.push(eachAsset);
            // }
        })

        return (
            <div className="nft">
                <div className='heading nft-heading'> {owner} this are your nfts!</div>

            
                
                
                <ul className='nft-list'>{
                    ownerAssets.map(eachAssetInArr =>{

                       let imgNummer = eachAssetInArr.data.img;
                       let img = 'https://ipfs.io/ipfs/' + imgNummer;

                        return (
                            <li key={eachAssetInArr.asset_id} className="nft-list-item-card">
                                 <img src={img} alt={eachAssetInArr.data.alt_img} width="200" className='img-wrapper'/>
                                 <h2 className='nft-name'>{eachAssetInArr.data.name}</h2>
                                {/* <p>user: {eachAssetInArr.owner}</p> */}
                                <p className='nft-mint'>minted: #{eachAssetInArr.template_mint}</p>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Nfts
