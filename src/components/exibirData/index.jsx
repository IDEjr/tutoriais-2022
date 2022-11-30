export default function exibirData({nome, idade})
{
    return(
        <>
            <span>{nome ? nome : 'Sem Nome'}</span>
            <span>{idade ? idade : '10'}</span>
        </>
    )
}