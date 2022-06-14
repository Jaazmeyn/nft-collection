import React, {useEffect, useState }from 'react'
import findOwner from './findOwner'

function Nfts() {
    
    const [atomicassets, setAtomicassets] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoader] = useState(true);
    // const [ownerAssets, setOwnerAssets] = useState();
    const ownerAssets = [];
    const owner = findOwner();

      // const url = "https://eos.api.atomicassets.io/docs/#/assets/get_atomicassets_v1_assets";
    let url = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?collection_name=womplayextra&page=1&limit=100&order=desc&sort=asset_id';

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
        return <div>loading</div>;
    }

    if(error){
        return <div>error</div>;
    }
    // console.log('atomicassets', atomicassets.data[0]);

  
    if(atomicassets){

        return (
            <div className="nft-view">data is here
                <div>nfts</div>
                { atomicassets.data.forEach((eachAsset)=>{

                    if(eachAsset.owner === owner){
                        // only assets form logged in user
                        ownerAssets.push(eachAsset);
                    }
                })}
                
                <ul>{
                    ownerAssets.map(eachAssetInArr =>{
                    // console.log(eachAssetInArr,'each array item in ul')
                       let imgNummer = eachAssetInArr.data.img;
                       let img = 'https://ipfs.io/ipfs/' + imgNummer;

                        return (
                            <li key={eachAssetInArr.asset_id}>
                                <h1>user: {eachAssetInArr.owner}</h1>
                                <p>nft name: {eachAssetInArr.data.name}</p>
                                <p>minted: #{eachAssetInArr.template_mint}</p>
                                <img src={img} alt={eachAssetInArr.data.alt_img} width="200"/>
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
