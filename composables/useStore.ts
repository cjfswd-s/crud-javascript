import { $fetch } from 'ohmyfetch';

export default function () {
    const route = useRoute()

    class Data {
        title: string = '';
        message: string = '';
    }

    interface IState {
        data: Data
        dataList: Data[]
    }

    const state = useState<IState>(
        'state',
        () => {
            return {
                data: new Data(),
                dataList: new Array<Data>(),
            }
        }
    )

    const getDataFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('database') || '[]') as Data[]
    }

    const getDataFromHttpStorage = async () => {
        return await $fetch('/api/database', {
            async onResponse(res){
                console.log('[store][get | success]', res)
            },
            async onResponseError(error) {
                console.log('[store][get | error] ', error)
            }
        })
    }

    const isEmptyData = (): boolean => {
        return Object.values(state.value.data).some(val => val === null || val === "")
    }

    const clearData = () => {
        state.value.data = new Data()
    }

    const createData = async () => {
        if (route.params.crud == 'offline') {
            state.value.dataList.push(toRaw(state.value.data))
        }
        if (route.params.crud == 'online') {
            await $fetch('/api/database', {
                method: 'post',
                body: JSON.stringify(toRaw(state.value.data)),
                async onResponse() {
                    state.value.dataList = await getDataFromHttpStorage() || []
                },
                async onResponseError(error) {
                    console.log('[store][post | error] ', error)
                }
            })
        }
        clearData()
    }

    const updateData = async (index: number) => {
        const { title, message } = toRaw(state.value.data)
        if (route.params.crud == 'offline') {
            if (title != '') state.value.dataList[index].title = title
            if (message != '') state.value.dataList[index].message = message
            localStorage.setItem("database", JSON.stringify(toRaw(state.value.dataList)))
        }
        if (route.params.crud == 'online') {
            $fetch(`/api/database/${index}`, {
                method: 'put',
                body: JSON.stringify(toRaw(state.value.data)),
                async onResponse() {
                    state.value.dataList = await getDataFromHttpStorage() || []
                },
                async onResponseError(error) {
                    console.log('[store][put | error] ', error)
                }
            })
        }
        clearData()
    }

    const excludeData = (index: number) => {
        if (route.params.crud == 'offline') {
            state.value.dataList.splice(index, 1)
        }
        if (route.params.crud == 'online') {
            $fetch(`/api/database/${index}`, {
                method: 'delete',
                async onResponse() {
                    state.value.dataList = await getDataFromHttpStorage() || []
                },
                async onResponseError(error) {
                    console.log('[store][delete | error] ', error)
                }
            })
        }
    }

    return {
        Data,
        state,
        clearData,
        isEmptyData,
        getDataFromLocalStorage,
        getDataFromHttpStorage,
        createData,
        updateData,
        excludeData
    }
}

