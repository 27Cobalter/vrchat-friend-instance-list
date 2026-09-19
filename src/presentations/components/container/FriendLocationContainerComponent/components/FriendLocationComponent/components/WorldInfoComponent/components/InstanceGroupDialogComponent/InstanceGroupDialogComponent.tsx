import { DialogComponent } from '../../../../../../../../presentational/DialogComponent/DialogComponent'
import { ButtonComponent } from '../../../../../../../../presentational/ButtonComponent/ButtonComponent'
import { useEffect, useState } from 'react'
import { vrchatApi } from '../../../../../../../../../../factory/vrchatApi'
import { GroupApiResponse } from '../../../../../../../../../../types/ApiResponse'
import styles from '../InstanceOwnerDialogComponent/style.module.scss'
import { SpinnerComponent } from '../../../../../../../../presentational/SpinnerComponent/SpinnerComponent'

type Props = {
  groupId: string
  isVisible: boolean
  hide: () => void
}
export const InstanceGroupDialogComponent = (props: Props) => {
  const [group, setGroup] = useState<GroupApiResponse | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      if (props.isVisible) {
        const result = await vrchatApi.getGroup({ id: props.groupId })
        setGroup(result)
      }
    })()
  }, [props.groupId, props.isVisible])

  return (
    <DialogComponent
      isVisible={props.isVisible}
      title="グループ"
      contentSlot={
        <>
          {group !== undefined ? (
            <div className={styles.user}>
              {group.iconUrl && (
                <img
                  className={styles.userImage}
                  src={group.iconUrl}
                  alt=""
                />
              )}
              <div className={styles.userName}>{group.name}</div>
            </div>
          ) : (
            <div className={styles.loading}>
              <SpinnerComponent />
            </div>
          )}
        </>
      }
      buttons={[
        <ButtonComponent color="gray" onClick={props.hide}>
          <span>閉じる</span>
        </ButtonComponent>,
      ]}
    />
  )
}
